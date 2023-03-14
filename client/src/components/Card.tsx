import React, { useState, useEffect } from "react";
import cardPropInterface from "../utils/interfaces/cardPropInterface";
import img from "../utils/imgs/dbz.jpeg";
import "../styles/Card.css";

function Card(prop: cardPropInterface){

    const handleMainClassName = () => {

        if(prop.draggingCard === `${prop.id}`) return "card-dragging";

        return 'card-hand';
    }

    const handleDraggable = () => {
        return true
    }

    return(
        <div className={handleMainClassName()} draggable={handleDraggable()} onDragStart={(e) => prop.handleDrag(e, prop.id)} onDragEnd={prop.dragEnd}>
            <img src={img} alt="" className="card-img"/>
            <span className="card-power">69</span>
        </div>
    )
}

export default Card;