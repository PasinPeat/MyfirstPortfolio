import React from "react";
import Photo from "../photo/myPhoto.png"
import "../App.css";
function Introduce(){

    return(
        <div className="Introduce">
        <header >
            <img src={Photo}/>
        </header>
        <footer>
            
            <h2>My name is Pasin Lertarunwattana, Now I'm studying Full stack Developer Bootcamp and want to be a good Front-End Developer</h2>
            
            <h1>Let's Enjoy !!! </h1>
        </footer>
        </div>
    )
}

export default Introduce