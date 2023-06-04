import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import CardColleInfo from "../components/CardColleInfo";
import CardsCollection from "../components/CardsCollection";
import CollectionHelpModal from "../components/CollectionHelpModal";
import DeckCardInfo from "../components/DeckCardInfo";
import Decks from "../components/Decks";
import Overlay from "../components/Overlay";
import userDeckInterface from "../utils/interfaces/userDeckInterface";
import "../styles/DeckEditor.css";

function DeckEditor() {

    const param = useParams();

    const location = useLocation();

    const [ deckToEdit, setDeckToEdit ] = useState<userDeckInterface>();

    useEffect(() => {
        //setDeckToEdit(location.state.currentDeck);
        console.log(location.state.currentDeckId);
        console.log(param.id);
    }, [])

    return(
        <main className="deck-editor-content">
            
            {/* <CardColleInfo card={selectedCardInfo} handleClose={closeCardColleInfo} deckBuilder={deckBuilderOpen}
             infoOpen={cardInfoModalOpen} addCard={handleAddCardToDeck} openDeck={deckInView && deckInView.deck}/>
            <DeckCardInfo card={selectedDeckCardInfo} handleClose={closeDeckCardInfo} infoOpen={deckCardInfoModalOpen}
                removeCard={handleRemoveCardFromDeck}/>
            <CollectionHelpModal modalIsOpen={helpModalOpen} handleCloseModal={closeHelpMOdal}/>
            <Overlay isOpen={prop.overlayIsOpen}/>
            <button className="deck-editor-btn" onClick={navigateToMenu}>back</button>
            <section className={`deck-editor-section-one ${deckBuilderOpen?"builder":""}`}>
                <Decks deckBuilderIsOpen={deckBuilderOpen} handleOpenDeckBuilder={openDeckBuilder} handleCloseDeckBuilder={closeDeckBuilder}
                    handleCurrentDeck={handleDeckInView} currentDeck={deckInView} handleCardInfo={handleCardInfoFromDeck}
                    handleNewDeck={handleCreateNewDeck} handleDeleteDeck={handleDeleteDeck} userDecks={userDecks}/>
                <button className="deck-editor-help-btn" onClick={openHelpModal}>?</button>
            </section>
            <section className="deck-editor-section-two">
                <CardsCollection userCards={userCards} cardInfoOpen={cardInfoModalOpen} handleOpenCardInfo={openCardColleInfo}/>
            </section> */}
        </main>
    )
}

export default DeckEditor;