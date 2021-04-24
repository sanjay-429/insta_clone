// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8QFRDwm73V5RvAaHyKFGXBFQOQfEncRU",
  authDomain: "instagram-fcb92.firebaseapp.com",
  projectId: "instagram-fcb92",
  storageBucket: "instagram-fcb92.appspot.com",
  messagingSenderId: "977255017567",
  appId: "1:977255017567:web:50aaada7edcb1eff8dffea",
  measurementId: "G-5JJ7Q2H8GZ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
const db = firebase.firestore(); // give acces to store data in database
const auth = firebase.auth(); // this is for authentication
const storage = firebase.storage(); //this is storage for store the images

export { db, auth, storage }; // now my react app succesfully connnect to firabase
