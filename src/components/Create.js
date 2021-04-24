import React, { useState, useContext } from "react";
import { FaCamera } from "react-icons/fa";
import { ContextProvider } from "../Global/Context";

const Create = () => {
  // here use loader i login then would be post otherwise page not show
  const { create, loader, user } = useContext(ContextProvider);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const createpost = (e) => {
    e.preventDefault();
    create({ title, image });
    // after crreate back title should be empty nd image should be empty
    setTitle("");
    setImage("");
  };
  return (
    <>
      {/* loader false and user not unknown */}
      {!loader && user ? (
        <div className="create">
          <form onSubmit={createpost}>
            <div className="create_input">
              <input
                type="text"
                className="create_inputt"
                placeholder="What are in your mind..."
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                required
              />
            </div>
            <div className="create_second">
              <div className="create_second-a">
                <label htmlFor="file">
                  <FaCamera className="camera" />
                </label>
                <input
                  type="file"
                  className="file"
                  id="file"
                  onChange={handleImage}
                  required
                />
              </div>
              <div className="create-second-b">
                <input type="submit" value="Create" className="btn-sweet" />
              </div>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Create;
