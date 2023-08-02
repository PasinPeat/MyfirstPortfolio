import React from "react";
import houseLogo from "../../public/icon/house.svg";
import Logo from "../../public/icon/Logo.png";
import "../App.css";
function LeftSidebar() {
  return (
    <div className="sidebar">
      <img src={Logo} />
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
