import React, { useEffect, useRef } from "react";
import cardColleInfoPropInterface from "../utils/interfaces/cardColleInfoPropInterface";
import "../styles/CardColleInfo.css";

function CardsColleInfo(prop: cardColleInfoPropInterface){

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

    return prop.deckBuilder && prop.infoOpen ? 
        <aside className={`card-colle-info-build ${prop.infoOpen?"active":""}`} ref={modalRef}>
            <div>
                {/* <img src={getImg(prop.id)} alt="" className="card-img"/> */}
                {prop.card && prop.card.name}
                <span className="card-colle-power-build">{returnCardPower()}</span>
                <span className="card-colle-cost-build">{returnCardCost()}</span>
                <button>Add to Deck</button>
                {prop.cardInDeck && <button>Remove from Deck</button>}
            </div>
        </aside>
        :
        <aside className={`card-colle-info ${prop.infoOpen?"active":""}`} ref={modalRef}>
            <div>
                {/* <img src={getImg(prop.id)} alt="" className="card-img"/> */}
                {prop.card && prop.card.name}
                <span className="card-colle-power">{returnCardPower()}</span>
                <span className="card-colle-cost">{returnCardCost()}</span>
            </div>
        </aside>
}

export default CardsColleInfo;