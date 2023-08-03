import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftSidebar from "./component/leftSidebar";
import Introduce from "./component/Introduce";
import OtherProject from "./component/OtherProject";
import Post from "./component/Post";
import TopInput from "./component/TopInput";
import { MessageContext } from "./context/MessageContext";

function App() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  return (
    <div className="LandingPage">
      <MessageContext.Provider
        value={[
          { input, setInput },
          { posts, setPosts },
        ]}
      >
        <LeftSidebar />

        <div className="CenterContent">
          <TopInput />
          <Introduce />
          <OtherProject />
        </div>
        <Post />
      </MessageContext.Provider>
    </div>
  );
}

export default App;
