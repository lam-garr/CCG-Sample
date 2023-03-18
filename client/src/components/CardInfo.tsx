import React, { useEffect, useRef } from "react";
import cardInterface from "../utils/interfaces/cardInterface";
import locationInterface from "../utils/interfaces/locationInterface";
import cardInfoPropInterface from "../utils/interfaces/cardInfoPropInterface";
import "../styles/CardInfo.css";

function CardInfo(prop: cardInfoPropInterface){

    const displayRef = useRef<any>(null);

    useEffect(() => {
        const handleEvent = (e:any) => {
            if((!displayRef.current.contains(e.target)) && (prop.infoOpen)){
                prop.toggleDisplay();
            }
        }

        document.addEventListener("mousedown", handleEvent);

        return() => {
            document.removeEventListener("mousedown", handleEvent);
        }
    })

    const getCardImg = (cardData: cardInterface | undefined) => {

        if(cardData === undefined){
            return;
        }

        if(cardData.name === "Vegeta") return "";

        if(cardData.name === "Trunks") return "";

        if(cardData.name === "Vegito") return "";
    }

    const getLocationImg = (locationData: locationInterface | undefined) => {

        if(locationData === undefined){
            return;
        }

        if(locationData.name === "Frieza's Hell") return "";

        if(locationData.name === "Kame House") return "";

        if(locationData.name === "Cell Games") return "";
    }

    return(
        prop.isLocation ? 
        <aside className={`locationInfo ${prop.infoOpen?'active':''}`} ref={displayRef}>
            <img src={getLocationImg(prop.locationId)} alt="" className="location-info-img"/>
            <span className="location-display-name">{prop.locationId && prop.locationId.name}</span>
        </aside> : 
        <aside className={`cardInfo ${prop.infoOpen?'active':''}`} ref={displayRef}>
            <img src={getCardImg(prop.id)} alt="" className="card-info-img"/>
            <span className="card-display-name">{prop.id && prop.id.name}</span>
            <span className="card-display-info">{prop.id && prop.id.description}</span>
        </aside>
    )
}

export default CardInfo;