import React, { useState, useEffect } from "react";
import cardPropInterface from "../utils/interfaces/cardPropInterface";
import img from "../utils/imgs/dbz.jpeg";
import "../styles/Card.css";

function Card(prop: cardPropInterface){

    const handleMainClassName = () => {
        if(prop.draggingCard === `${prop.id}`) return "card-dragging";

        return 'card-hand';
    }

    const handleCardCostClassName = () => {
        if(prop.inLocation === true) return "card-location";

        return "card-cost";
    }

    const handleDraggable = () => {
        return true
    }

    const [ cardPower, setCardPower ] = useState(69);

    const [ cardCost, setCardCost ] = useState(1);

    //useEffect to call api to get card power and cost, the nset them.

    return(
        <div className={handleMainClassName()} draggable={handleDraggable()} onDragStart={(e) => prop.handleDrag(e, prop.id)} onDragEnd={prop.dragEnd}>
            <img src={img} alt="" className="card-img"/>
            <span className="card-power">{cardPower}</span>
            <span className={handleCardCostClassName()}>{cardCost}</span>
        </div>
    )
}

export default Card;