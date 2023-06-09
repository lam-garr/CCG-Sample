import React, { useState, useEffect, useRef } from "react";
import cardColleDisplayPropInterface from "../utils/interfaces/cardColleDisplayPropInterface";
import "../styles/CardColleDisplay.css";

function CardsColleDisplay(prop: cardColleDisplayPropInterface){

    const modalRef = useRef<any>(null);

    useEffect(() => {
        const handleEvent = (e: any) => {
            if((!modalRef.current.contains(e.target)) && (prop.infoOpen)){
                prop.handleClose();
            }
        }

        document.addEventListener("mousedown", handleEvent);

        return () => document.removeEventListener("mousedown", handleEvent);
    })

    const returnCardPower = () => {
        if(prop.card) return `power: ${prop.card.power}`;
    }

    const returnCardCost = () => {
        if(prop.card) return `cost: ${prop.card.cost}`;
    }

    return(
        <aside className={`card-colle-display ${prop.infoOpen?"active":""}`} ref={modalRef}>
            <div>
                {/* <img src={getImg(prop.id)} alt="" className="card-img"/> */}
                {prop.card && prop.card.name}
                <span className="card-colle-display-power">{returnCardPower()}</span>
                <span className="card-colle-display-cost">{returnCardCost()}</span>
            </div>
        </aside>
    )
}

export default CardsColleDisplay;