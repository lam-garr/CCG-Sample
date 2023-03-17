import React, { useState, useEffect } from "react";
import cardInterface from "../utils/interfaces/cardInterface";
import cardInfoPropInterface from "../utils/interfaces/cardInfoPropInterface";
import img from "../utils/imgs/dbz.jpeg";
import "../styles/CardInfo.css";

function CardInfo(prop: cardInfoPropInterface){

    const getImg = (cardData: cardInterface | undefined) => {

        if(cardData === undefined){
            return;
        }

        if(cardData.id === "Goku") return img;
    }

    return(
        <aside className={`cardInfo ${prop.infoOpen?'active':''}`}>
            <img src={getImg(prop.id)} alt="" className="card-info-img"/>
            <span className="card-display-name">Son Goku</span>
            <span className="card-display-info">"Kamehameha!!!"</span>
        </aside>
    )
}

export default CardInfo;