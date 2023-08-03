import React from "react";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
function Post() {
  const context = useContext(MessageContext);
  const posts = context[1].posts;
  return (
    <div className="Rightsidebar">
      <div>
        <h2>Have a nice day</h2>
        <div>
          {posts.map((item, index) => {
            return (
              <div key={index} className="Message">
                <img
                  className="Message_image"
                  src={`https://source.unsplash.com/random?sig=${index}`}
                />
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
