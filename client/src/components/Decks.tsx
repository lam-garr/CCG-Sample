import React from "react";
import deckPropInterface from "../utils/interfaces/deckPropInterface";
import "../styles/Decks.css";

function Decks(prop: deckPropInterface){
    return(
        prop.deckBuilderIsOpen ? 
        <section className="deck-builder">
            builder
            <button className="deck-builder-close-btn" onClick={prop.handleCloseDeckBuilder}>finish</button>
        </section> 
        : 
        <section className="deck-collection">
            <button className="deck-collection-left-btn">left</button>
            <div className="deck-collection-decks">
                <button onClick={prop.handleOpenDeckBuilder}>New Deck</button>
                collection
            </div>
            <button className="deck-collection-right-btn">right</button>
        </section>
    )
}

export default Decks;