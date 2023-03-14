import React, { useState, useEffect } from "react";
import Card from "./Card";
import locationPropInterface from "../utils/interfaces/locationPropInterface";
import "../styles/Location.css";

function Location(prop: locationPropInterface){

    const getBottomLocationClassName = () => {
        if(prop.hover){
            return "location-bottom-active";
        }else{
            return "location-bottom";
        }
    }

    return(
        <section className="main-location">
            <div className="location-top">

            </div>
            <div className="location-mid">
                <span className="opp-power">6</span>
                <span className="user-power">9</span>
            </div>
            <div className={getBottomLocationClassName()} onDrop={prop.handleOnDrop} onDragOver={prop.handleOnDrag} onDragLeave={prop.handleDragLeave}>
                {prop.cards && prop.cards.map((card, i) => {
                    return(<Card handleDrag={prop.handleDrag} id={card} draggingCard={prop.draggingCard}/>)
                })}
            </div>
        </section>
    )
}

export default Location;