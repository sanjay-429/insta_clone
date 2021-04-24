import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import Context from "./Global/Context";
import Stories from "./components/Stories";
import Create from "./components/Create";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Context>
      {/* In context componenet there is propschild so navbra is props child */}
      <div className="container">
        <Stories />
        <Create />
        <Post />
        <Sidebar />
      </div>
      <Navbar />
      <Model />
    </Context>
  );
}

export default App;
