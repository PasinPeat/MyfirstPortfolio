import React from "react";
import Photo from "../../public/photo/myPhoto.png"
import "../App.css";
function Introduce(){

    return(
        <div className="Introduce">
        <header className="IntroduceHeader">
            <img src={Photo}/>
        </header>
        <footer>
            <h1>I'm a Front-end developer</h1>
            <h2>lorem10</h2>
        </footer>
        </div>
    )
}

export default Introduce