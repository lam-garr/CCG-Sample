import React, { useState, useEffect } from "react";
import Card from "./Card";
import cardInterface from "../utils/interfaces/cardInterface";
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

    const handleCardsAlreadyPlayed = (card: cardInterface) => {

        if((prop.playedCards.includes(card))) return false;

        return true;
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
                    return(<Card handleDrag={prop.handleDrag} id={card} draggingCard={prop.draggingCard} dragEnd={prop.dragEndCard} inLocation={true} isDraggable={handleCardsAlreadyPlayed(card)} manaAmount={prop.myMana} from={"location"}/>)
                })}
            </div>
        </section>
    )
}

export default Location;