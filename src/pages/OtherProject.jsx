import React from "react";
// import Photo from "../../public/photo/myPhoto.png"
import "../App.css";
import Pico from "../photo/Pico.png"
import Pico_1 from "../photo/Pico_1.png"
import Pico_2 from "../photo/Pico_2.png"
import Pico_3 from "../photo/Pico_3.png"
function OtherProject(){
    return(
        <div className="MyProject">
        <header >
        <h1> My Project </h1>
        </header>
        <footer>
        <img src={Pico}/>
        <img src={Pico_1}/>
        <img src={Pico_2}/>
        <img src={Pico_3}/>
        </footer>
        </div>
    )
}

export default OtherProject