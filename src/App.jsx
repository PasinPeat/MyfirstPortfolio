import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftSidebar from "./component/leftSidebar";
import Introduce from "./component/Introduce";
import OtherProject from "./component/OtherProject";
import Post from "./component/Post";
import TopInput from "./component/TopInput";
function App() {
  return (
    <div className="LandingPage">
      <LeftSidebar />

      <div className="CenterContent">
        <TopInput/>
        <Introduce />
        <OtherProject />
      </div>
      <Post />
    </div>
  );
}

export default App;
