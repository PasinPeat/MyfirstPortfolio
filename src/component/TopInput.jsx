import { useContext, useState } from "react";
import React from "react";
import { MessageContext } from "../context/MessageContext";

function TopInput() {
  // const [input, setInput] = useState("");
  // const [posts, setPosts] = useState([]);

  const context = useContext(MessageContext) 
  const {input,setInput} = context[0]
  const {posts, setPosts} = context[1]

  function handleAddPost(e) {
    e.preventDefault();
    const newPosts = [...posts];

    if (input === "") {
      alert("Please text something to me !!");
    } else {
      
      newPosts.push(input);
      setPosts(newPosts);
      setInput("");
    }
  }

  return (
    <div className="Input">
      <span className="Input_header">Say </span>
      <input
        className="Input_field"
        type="text"
        placeholder="What's on your mind ?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <span className="Input_header"> to Me </span>
      <button
        value={input}
        onClick={handleAddPost}
        type="submit"
        className="button_post"
      >
        Click
      </button>
      
    </div>
  );
}

export default TopInput;
