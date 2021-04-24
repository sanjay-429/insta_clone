import React from "react";
import { ContextProvider } from "../Global/Context";

const Sidebar = () => {
  const { loader, user } = React.useContext(ContextProvider);
  const username = !loader && user ? user.displayName : "";
  const [state] = React.useState([
    { id: 1, image: "/images/krishna.jpg", name: "Krishna23" },
    { id: 2, image: "/images/amits.jpg", name: "Amit21" },
    { id: 3, image: "/images/anurag.jpg", name: "Anurag82" },
    { id: 4, image: "/images/anish.jpg", name: "Anish05" }
  ]);
  return (
    <div className="sidebar">
      {!loader && user && user.displayName ? (
        <div className="sidebar_user">
          <div className="sidebar_user-avator">{username[0]}</div>
          <div className="sidebar_user-name">{username}</div>
        </div>
      ) : (
        ""
      )}

      <div className="sidebar_list">
        <h3> Suggestion for you</h3>

        {state.map((user) => (
          <div className="sidebar_list-user">
            <div className="sidebar_list-a" key={user.id}>
              <div className="sidebar_list-a-img">
                <img src={user.image} alt={user.image} />
              </div>
              <div className="sidebar_list-a-name">{user.name}</div>
            </div>
            <div className="sidebar_list-b">
              <a href=" ">Follow</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
