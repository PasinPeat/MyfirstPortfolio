import { useState } from "react";
import "./App.css";

import Post from "./component/Post";

// import LeftSidebar from "./component/leftSidebar";
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
        {/* <LeftSidebar /> */}
        <CenterContent />
        <Post />
      </MessageContext.Provider>
    </div>
  );
}

export default App;
