import React from "react";
import Logo from "../icon/Logo.png";
import dot from "../icon/dot.svg";
import "../App.css";
function LeftSidebar() {
  return (
    <div className="sticky">
    <div className="sidebar">
      <img className="sidebarLogo" src={Logo} />
      <section>
        <img src={dot} />
        <span>Home</span>
      </section>
      <section>
        <img src={dot} />
        <span>Other product</span>
      </section>
      <section>
        <img src={dot} />
        <span>Passion</span>
      </section>
    </div>
    </div>
  );
}

export default LeftSidebar;
