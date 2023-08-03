import React from "react";
import TopInput from "./TopInput";
import Introduce from "../pages/Introduce";
import OtherProject from "../pages/OtherProject";
import Passion from "../pages/Passion";
function CenterContent() {
  return (
    <div className="CenterContent">
      <TopInput />
      <h1>Hello Everyone Welcome to my Portfolio </h1>
      <Introduce />

      <OtherProject />

      <Passion />
    </div>
  );
}

export default CenterContent;
