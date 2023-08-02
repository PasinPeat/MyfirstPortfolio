import React from "react";
import houseLogo from "../../public/icon/house.svg";
function LeftSidebar() {
  return (
    <div className="sidebar">
      <h1>Logo</h1>
      <section>
        <img src={houseLogo} />
        <span>Home</span>
      </section>
      <section>
        <img src={houseLogo} />
        <span>Home</span>
      </section>
      <section>
        <img src={houseLogo} />
        <span>Home</span>
      </section>
    </div>
  );
}

export default LeftSidebar;
