import React from "react";
// import Photo from "../../public/photo/myPhoto.png"
import Passion1 from "../photo/Passion1.png"
import Passion2 from "../photo/Passion2.png"
import "../App.css";
function Passion(){
    return(
        <div className="passion">
        <header >
        <h1>My Passion </h1>
        </header>
        <footer>
        <img src={Passion1}/>
        <img src={Passion2}/>
            
        </footer>
        </div>
    )
}

export default Passion