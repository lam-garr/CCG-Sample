import React, { useState } from "react";
import cardInterface from "../utils/interfaces/cardInterface";
import deckPropInterface from "../utils/interfaces/deckPropInterface";
import "../styles/Decks.css";

function Decks(prop: deckPropInterface){

    //const [ currentDeck , setCurrentDeck ] = useState<any[]>([]);

    const handleCardInfo = (e: any, card: cardInterface) => {
        prop.handleCardInfo(card);
    }

    const handleCurrentDeck = (e:any, deck: cardInterface[]) => {
        //setCurrentDeck(deck);
        prop.handleCurrentDeck(deck);
        prop.handleOpenDeckBuilder();
    }

    const handleNewDeck = () => {
        prop.handleNewDeck();
    }

    return(
        prop.deckBuilderIsOpen ? 
        <section className="deck-builder">
                {prop.currentDeck && prop.currentDeck.map((card, i) => {
                    return(
                        <div key={i} onClick={(e) => {handleCardInfo(e, card)}}>
                            {card.name}
                        </div>
                    )
                })}
                {!prop.currentDeck && <span>deck is empty</span>}
            <button className="deck-builder-close-btn" onClick={prop.handleCloseDeckBuilder}>finish</button>
        </section> 
        : 
        <section className="deck-collection">
            <button className="deck-collection-left-btn">left</button>
            <div className="deck-collection-decks">
                <button onClick={handleNewDeck}>New Deck</button>
                {prop.userDecks && prop.userDecks.map((deck, i) => {
                return(
                    <div key={i} onClick={(e) => {handleCurrentDeck(e, deck.deck)}}>
                        {deck.title}
                    </div>
                )
                })}
            </div>
            <button className="deck-collection-right-btn">right</button>
        </section>
    )
}

export default Decks;