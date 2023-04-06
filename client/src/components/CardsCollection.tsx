import React from "react";
import cardInterface from "../utils/interfaces/cardInterface";
import cardsCollectionsPropInterface from "../utils/interfaces/cardsCollectionsPropInterface";
import "../styles/CardsCollection.css";

function CardsCollections(prop: cardsCollectionsPropInterface){
    
    const handleCardInfo = (e: any, card: cardInterface) => {
        prop.handleOpenCardInfo(card)
    }

    return(
        <section className="cards-collection-content">
            <div className="cards-collection-header">
                header
            </div>
            <div className="cards-collection-cards">
                {prop.userCards && prop.userCards.map((card, i ) => {
                    return(
                        <div className="collection-card" onClick={(e) => {handleCardInfo(e, card)}}>
                            {card.name}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default CardsCollections;