import React, { useState, useEffect } from "react";
import "../styles/PlayingCard.css";
import playingCardInterface from "../utils/interfaces/playingCardPropInterface";

function PlayingCard(prop: playingCardInterface){

    const [ cardStyleClass, setCardStyleClass ] = useState("card-back");

    useEffect(() => {
        setTimeout(() => {
            setCardStyleClass("flipped-card-front");
        }, 1000)
    }, [])

    return(
        <div className={cardStyleClass}>
            played
        </div>
    )
}

export default PlayingCard;