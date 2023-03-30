import React, { useState, useEffect } from "react";
import Card from "./Card";
import PlayingCard from "./PlayingCard";
import cardInterface from "../utils/interfaces/cardInterface";
import locationPropInterface from "../utils/interfaces/locationPropInterface";
import "../styles/Location.css";
import locationInterface from "../utils/interfaces/locationInterface";

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

    const handleSelectedLocation = (e:any, locationData: locationInterface) => {
        prop.handleLocationDisplay(locationData);
        prop.toggleDisplay();
    }

    return(
        <section className="main-location">
            <div className="location-top">
                {prop.oppCards && prop.oppCards.map((card, i) => {
                    const playIndex = prop.opponentPlayOrder.findIndex(item => item.id === card.id);
                    return(<PlayingCard card={card} index={playIndex} oppTimeOutLength={prop.oppTimeOutLength}/>);
                })}
            </div>
            <div className="location-mid" onClick={(e) => {handleSelectedLocation(e, prop.id)}}>
                <span>{prop.id.name}</span>
                <span className="opp-power">{prop.id.oppPower}</span>
                <span className="user-power">{prop.id.playerPower}</span>
            </div>
            <div className={getBottomLocationClassName()} onDrop={prop.handleOnDrop} onDragOver={prop.handleOnDrag} onDragLeave={prop.handleDragLeave}>
                {prop.cards && prop.cards.map((card, i) => {
                    if(card.flip === true){
                        const playIndex = prop.playerPlayOrder.findIndex(item => item.id === card.id);
                        return(<PlayingCard card={card} index={playIndex} playerTimeOutLength={prop.playerTimeOutLength}/>)
                    }
                    return(<Card handleDrag={prop.handleDrag} id={card} draggingCard={prop.draggingCard}
                        dragEnd={prop.dragEndCard} inLocation={true} isDraggable={handleCardsAlreadyPlayed(card)}
                        manaAmount={prop.myMana} from={"location"} selectCard={prop.selectCard}
                        toggleDisplay={prop.toggleDisplay}/>)
                })}
            </div>
        </section>
    )
}

export default Location;

//style={{backgroundImage: `url(${img})`}}
