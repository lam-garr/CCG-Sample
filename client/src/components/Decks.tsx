import React, { useState } from "react";
import cardInterface from "../utils/interfaces/cardInterface";
import deckPropInterface from "../utils/interfaces/deckPropInterface";
import userDeckInterface from "../utils/interfaces/userDeckInterface";
import "../styles/Decks.css";
import { useNavigate } from "react-router-dom";

function Decks(prop: deckPropInterface){

    //const [ currentDeck , setCurrentDeck ] = useState<any[]>([]);

    /* const handleCardInfo = (e: any, card: cardInterface) => {
        prop.handleCardInfo(card);
    } */

    const navigate = useNavigate();

    const handleCurrentDeck = (e:any, deck: userDeckInterface) => {
        //setCurrentDeck(deck);
        //prop.handleCurrentDeck(deck);
        //prop.handleOpenDeckBuilder();
        navigate({pathname:"/deck-builder"},
        {state:{currentDeck:deck}});
    }

    const handleNewDeck = () => {
        prop.handleNewDeck();
    }

    /* const handleDeleteDeck = () => {
        if(prop.currentDeck) prop.handleDeleteDeck(prop.currentDeck)
    } */

    return(
        <section className="deck-collection">
            <button className="deck-collection-left-btn">left</button>
            <div className="deck-collection-decks">
                <button onClick={handleNewDeck}>New Deck</button>
                {prop.userDecks && prop.userDecks.map((deck, i) => {
                return(
                    <div key={i} onClick={(e) => {handleCurrentDeck(e, deck)}} className="deck-collection-title-card">
                        {deck.title}
                    </div>
                )
                })}
            </div>
            <button className="deck-collection-right-btn">right</button>
        </section>
        /* prop.deckBuilderIsOpen ? 
        <section className="deck-builder">
                {prop.currentDeck && prop.currentDeck.deck.map((card, i) => {
                    return(
                        <div key={i} onClick={(e) => {handleCardInfo(e, card)}}>
                            {card.name}
                        </div>
                    )
                })}
                {!prop.currentDeck && <span>deck is empty</span>}
            <button className="deck-builder-close-btn" onClick={prop.handleCloseDeckBuilder}>finish</button>
            <button className="deck-builder-delete-btn" onClick={handleDeleteDeck}>Delete deck</button>
        </section> 
        : 
        <section className="deck-collection">
            <button className="deck-collection-left-btn">left</button>
            <div className="deck-collection-decks">
                <button onClick={handleNewDeck}>New Deck</button>
                {prop.userDecks && prop.userDecks.map((deck, i) => {
                return(
                    <div key={i} onClick={(e) => {handleCurrentDeck(e, deck)}}>
                        {deck.title}
                    </div>
                )
                })}
            </div>
            <button className="deck-collection-right-btn">right</button>
        </section> */
    )
}

export default Decks;