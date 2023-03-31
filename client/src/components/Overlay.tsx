import React from "react";
import overlayPropInterface from "../utils/interfaces/overlayPropInterface";
import "../styles/Overlay.css";

function Overlay(prop: overlayPropInterface){
    return(
        <div className={`overlay ${prop.isOpen?"active":""}`}></div>
    )
}

export default Overlay;