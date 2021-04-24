import React, { createContext, useEffect } from "react";
import firebase from "firebase";
import { auth, db, storage } from "../config";
const ContextProvider = createContext();

const Context = (props) => {
  const [model, setModel] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [loader, setLoader] = React.useState(true);
  const [posts, setPosts] = React.useState([]);

  const openModel = () => {
    setModel(true);
  };
  const closeModel = () => {
    setModel(false);
  };
  const register = async (user) => {
    const { username, email, password } = user;
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      res.user.updateProfile({ displayName: username });
      setModel(false);
    } catch {
      console.log("Error");
    }
  };
  const login = async (user) => {
    const { email, password } = user;

    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      setModel(false);
    } catch {
      console.log("loginerror");
    }
  };
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const create = (data) => {
    const { title, image } = data;
    const upload = storage.ref(`images/${image.name}`).put(image);
    //  firsr arg for download image, 2nd arg how much downaload happened
    upload.on(
      "state_changed",
      (snp) => {
        let progress = (snp.bytesTransferred / snp.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        //success function complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              title,
              image: url,
              username: user.displayName,
              currentTime: firebase.firestore.FieldValue.serverTimestamp()
              //titile:title
            });
          });
      }
    );
  };

  const publishComment = (data) => {
    const { id, comment } = data;
    // create a collection in post collection
    db.collection("posts").doc(id).collection("comments").add({
      comment: comment,
      username: user.displayName,
      currentTime: firebase.firestore.FieldValue.serverTimestamp()
    });
  };

  // after  login user well display on the regiser/login so we will use useEffect
  // because useEffect will execute afterevry render

  React.useEffect(() => {
    //if user alrady login then
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoader(false);
    });
    //  fetch posts from firebase and fetch post which last is show first
    // onsnapshot is a fun in firebase it gives info about latest data/
    //once we add new post then we dont need to refresh  browser fetch lates post from firebase and show
    db.collection("posts")
      .orderBy("currentTime", "desc")
      .onSnapshot((snp) => {
        //console.log("my data", snp.docs);
        setPosts(
          snp.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            image: doc.data().image,
            username: doc.data().username
          }))
        );
      });
  }, []);
  console.log("login User", user);

  return (
    <ContextProvider.Provider
      value={{
        model,
        openModel,
        closeModel,
        register,
        login,
        user,
        loader,
        logout,
        create,
        posts,
        publishComment
      }}
    >
      {/* pass the value to child component */}
      {props.children}
    </ContextProvider.Provider>
  );
};
export default Context;
export { ContextProvider };
