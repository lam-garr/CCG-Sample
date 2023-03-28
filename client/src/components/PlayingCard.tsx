import React, { useState, useEffect } from "react";
import "../styles/PlayingCard.css";
import playingCardInterface from "../utils/interfaces/playingCardPropInterface";

function PlayingCard(prop: playingCardInterface){

    const [ cardStyleClass, setCardStyleClass ] = useState("card-back");

    const getTime = () => {
        if(prop.playerTimeOutLength){
            return ((prop.playerTimeOutLength + prop.index + 1) * 1000)
        }

        if(prop.oppTimeOutLength){
            return ((prop.oppTimeOutLength + prop.index + 1) * 1000)
        }

        if(prop.index === 0){
            return 1000;
        }

        if(prop.index === 1){
            return 2000;
        }

        return (((prop.index)+(1))*1000);
    }

    useEffect(() => {
        setTimeout(() => {
            setCardStyleClass("flipped-card-front");
        }, getTime())
    }, [])

    return(
        <div className={cardStyleClass}>
            played
        </div>
    )
}

export default PlayingCard;