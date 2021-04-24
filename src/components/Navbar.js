import React from "react";

import { MdHome } from "react-icons/md";
import { ContextProvider } from "../Global/Context";
import {
  FaSistrix,
  FaTelegramPlane,
  FaRegCompass,
  FaRegHeart
} from "react-icons/fa";
const Navbar = () => {
  const { model, openModel, user, loader, logout } = React.useContext(
    ContextProvider
  );
  console.log("mymodel", model);

  const openForms = () => {
    openModel();
  };
  const checkUser = () => {
    //  if loader is false and user is true;
    return !loader && user ? (
      <li>
        {user.displayName}/
        <span style={{ cursor: "pointer" }} onClick={userLogout}>
          Logout
        </span>
      </li>
    ) : (
      <li style={{ cursor: "pointer" }} onClick={openForms}>
        Register/Login
      </li>
    );
  };
  const userLogout = () => {
    logout();
  };
  return (
    <div className="navbar">
      <div className="navabar__first">
        <div className="navbar__first-logo">
          <img src="/images/logowrite.png" alt="" />
        </div>
      </div>

      <div className="navabar__middle">
        <div className="navbar_middle-search">
          <input type="text" className="navbar_search" placeholder="Search" />
          <FaSistrix className="searchIcon" />
        </div>
      </div>

      <div className="navabar__last">
        <li>
          <MdHome className="navbar_last-icon" />
        </li>
        <li>
          <FaTelegramPlane className="navbar_last-icon" />
        </li>
        <li>
          <FaRegCompass className="navbar_last-icon" />
        </li>
        <li>
          <FaRegHeart className="navbar_last-icon" />
        </li>
        {/* lets do dynamic register/login */}
        {checkUser()}
      </div>
    </div>
  );
};

export default Navbar;
