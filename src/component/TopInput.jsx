import { useState } from "react";
import React from "react";

function TopInput() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  function handleAddPost(e) {
    e.preventDefault();
    const newPosts = [...posts];
    newPosts.push(input);
    setPosts(newPosts);
    setInput("");
  }

  return (
    <div className="Input">
      <div className="Input_header">Say something to me</div>
      <input
        className="Input_field"
        type="text"
        placeholder="What's on your mind ?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        value={input}
        onClick={handleAddPost}
        type="submit"
        className="button_post"
      >
        Click
      </button>
      <div>
        {posts.map((item, index) => {
          return (
            <div key={index} className="message">
              <h1>{item}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopInput;
