import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftSidebar from "./component/leftSidebar";
import Introduce from "./component/Introduce";
import OtherProject from "./component/OtherProject";
import Skill from "./component/Skill";
function App() {
  return (
    <div>
      <LeftSidebar />
      
      <div className="CenterContent">
        <Introduce />
        <OtherProject />
      </div>
      <Skill/>
    </div>
  );
}

export default App;
