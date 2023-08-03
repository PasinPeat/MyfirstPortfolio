import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Introduce from "./pages/Introduce";
import OtherProject from "./pages/OtherProject";
import Passion from "./pages/Passion";
import Post from "./component/Post";
import TopInput from "./component/TopInput";
import LeftSidebar from "./component/leftSidebar";
import CenterContent from "./component/CenterContent";
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
        <CenterContent/>
        

        <Post />
      </MessageContext.Provider>
    </div>
  );
}

export default App;
