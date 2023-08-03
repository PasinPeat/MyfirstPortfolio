import React from "react";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
function Post() {
  const context = useContext(MessageContext);
  const posts = context[1].posts;
  return (
    <div className="sticky">
      <div className="Rightsidebar">
        <div>
          <h2>Say to me list</h2>
          <div>
            {posts.map((item, index) => {
              return (
                <div key={index} className="Message">
                  <img
                    className="Message_image"
                    src={`https://source.unsplash.com/random?sig=${index}`}
                  />
                  <div>
                    <h3>Message</h3>
                    <span>{item}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
