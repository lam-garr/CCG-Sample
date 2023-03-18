import React, { useState, useEffect } from "react";
import cardInterface from "../utils/interfaces/cardInterface";
import cardPropInterface from "../utils/interfaces/cardPropInterface";
import "../styles/Card.css";

function Card(prop: cardPropInterface){

    const handleMainClassName = () => {
        if(prop.draggingCard === `${prop.id.id}`) return "card-dragging";

        if(prop.inLocation === true) return "card-inside-location";

        return 'card-hand';
    }

    const handleCardCostClassName = () => {
        if(prop.inLocation === true) return "card-location";

        return "card-cost";
    }

    const handleCardDrag =(e: React.DragEvent, id: cardInterface) => {

        if(prop.from === "hand"){
            if((prop.manaAmount) && id.cost <= prop.manaAmount){
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

    const getImg = (id: cardInterface) => {
        //WIP
        if(id.name === "Vegeta") return "";

        if(id.name === "Trunks") return "";

        if(id.name === "Vegito") return "";
    }

    const getCardPower = (id: cardInterface) => {
        //WIP
        if(id.name === "Goku") return id.power;

        if(id.name === "Trunks") return id.power;

        return id.power;
    }

    const handleSelectedCard = (e:any, data: cardInterface) => {
        prop.selectCard(data);
        prop.toggleDisplay();
    }

    const [ cardPower, setCardPower ] = useState(69);

    const [ cardCost, setCardCost ] = useState(2);

    //useEffect to call api to get card power and cost, then set them.

    return(
        <div className={handleMainClassName()} draggable onDragStart={(e) => handleCardDrag(e, prop.id)} onDragEnd={prop.dragEnd} onClick={(e) => {handleSelectedCard(e, prop.id)}}>
            <img src={getImg(prop.id)} alt="" className="card-img"/>
            <span className="card-power">{getCardPower(prop.id)}</span>
            <span className={handleCardCostClassName()}>{getCardPower(prop.id)}</span>
        </div>
    )
}

export default Card;