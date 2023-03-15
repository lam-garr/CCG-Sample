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
        //if((prop.manaAmount) && (prop.isDraggable === true) && (cardCost <= prop.manaAmount)) return true;

        if(prop.isDraggable === false) return false;

        return false;
    }

    const handleCardDrag =(e: React.DragEvent, id: string) => {

        if(prop.from === "hand"){
            if((prop.manaAmount) && cardCost <= prop.manaAmount){
                prop.handleDrag(e, id);
                return;
            }

            e.preventDefault();
            return;
        }

        if(prop.from === "location"){
            if(prop.isDraggable === true){
                prop.handleDrag(e, id);
                return;
            }

            e.preventDefault();
            return;
        }

    }

    const getImg = (id: string) => {
        //WIP
        return img;
    }

    const getCardPower = (id: string) => {
        //WIP
        if(id === "Goku") return 9000;

        return 6900;
    }

    const [ cardPower, setCardPower ] = useState(69);

    const [ cardCost, setCardCost ] = useState(2);

    //useEffect to call api to get card power and cost, the nset them.

    return(
        <div className={handleMainClassName()} draggable={handleDraggable()} onDragStart={(e) => handleCardDrag(e, prop.id)} onDragEnd={prop.dragEnd}>
            <img src={getImg(prop.id)} alt="" className="card-img"/>
            <span className="card-power">{getCardPower(prop.id)}</span>
            <span className={handleCardCostClassName()}>{cardCost}</span>
        </div>
    )
}

export default Card;