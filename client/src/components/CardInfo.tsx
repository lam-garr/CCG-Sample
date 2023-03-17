import React, { useEffect, useRef } from "react";
import cardInterface from "../utils/interfaces/cardInterface";
import cardInfoPropInterface from "../utils/interfaces/cardInfoPropInterface";
import trunks from "../utils/imgs/trunks.jpeg";
import img from "../utils/imgs/dbz.jpeg";
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

    const getImg = (cardData: cardInterface | undefined) => {

        if(cardData === undefined){
            return;
        }

        if(cardData.id === "Trunks") return trunks;

        if(cardData.id === "Goku") return img;
    }

    return(
        <aside className={`cardInfo ${prop.infoOpen?'active':''}`} ref={displayRef}>
            <img src={getImg(prop.id)} alt="" className="card-info-img"/>
            <span className="card-display-name">Son Goku</span>
            <span className="card-display-info">"Kamehameha!!!"</span>
        </aside>
    )
}

export default CardInfo;