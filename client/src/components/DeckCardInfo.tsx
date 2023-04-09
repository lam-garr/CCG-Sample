import React, { useEffect, useRef} from "react";
import deckCardInfoPropInterface from "../utils/interfaces/deckCardInfoPropInterface";
import "../styles/DeckCardInfo.css";

function DeckCardInfo(prop: deckCardInfoPropInterface){

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
        <aside className={`deck-card-info ${prop.infoOpen?"active":""}`} ref={modalRef}>
            <div>
                {/* <img src={getImg(prop.id)} alt="" className="card-img"/> */}
                {prop.card && prop.card.name}
                <span className="deck-card-power">{returnCardPower()}</span>
                <span className="deck-card-cost">{returnCardCost()}</span>
                <button className="remove-card-btn">Remove from Deck</button>
            </div>
        </aside>
    )
}

export default DeckCardInfo;