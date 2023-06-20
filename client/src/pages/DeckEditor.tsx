import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CardColleInfo from "../components/CardColleInfo";
import CardsCollection from "../components/CardsCollection";
import CollectionHelpModal from "../components/CollectionHelpModal";
import DeckCardInfo from "../components/DeckCardInfo";
import Decks from "../components/Decks";
import Overlay from "../components/Overlay";
import userDeckInterface from "../utils/interfaces/userDeckInterface";
import deckEditorPropInterface from "../utils/interfaces/deckEditorPropInterface";
import "../styles/DeckEditor.css";
import cardInterface from "../utils/interfaces/cardInterface";

function DeckEditor(prop: deckEditorPropInterface) {

    const param = useParams();

    const location = useLocation();

    const navigate= useNavigate();

    const [ userCards, setUserCards ] = useState<any[]>([]);

    const [ deckToEdit, setDeckToEdit ] = useState<userDeckInterface>();

    const [ helpModalOpen, setHelpModalOpen ] = useState(false);

    const [ selectedCardInfo, setSelectedCardInfo ] = useState<cardInterface>();

    const [ deckCardInfoModalOpen, setDeckCardInfoModalOpen ] = useState(false);

    const [ builderCardInfoModalOpen, setBuilberCardInfoModalOpen ] = useState(false);

    const [ selectedDeckCardInfo, setSelectedDeckCardInfo ] = useState<cardInterface>();

    const [ cardInfoModalOpen, setCardInfoModalOpen ] = useState(false);

    const openCardColleInfo = (card: cardInterface) => {
        setSelectedCardInfo(card);
        setCardInfoModalOpen(true);
        prop.handleOverlayChange();
    }

    const closeCardColleInfo = () => {
        setCardInfoModalOpen(false);
        prop.handleOverlayChange();
    }

    const handleCardInfoFromDeck = (card: cardInterface) => {
        //when card is clicked from deck, open modal with option to remove
        setSelectedDeckCardInfo(card);
        setDeckCardInfoModalOpen(true);
        prop.handleOverlayChange();
    }

    const closeDeckCardInfo = () => {
        setDeckCardInfoModalOpen(false);
        prop.handleOverlayChange();
    }

    const handleRemoveCardFromDeck = async (card: cardInterface) => {
        //make apu call with card to remove, then set with returned deck
        //setDeckInView(prev => {return prev.filter(item => item.id !== card.id)})
        const data = window.localStorage.getItem("AccessToken");

        let token;

        if(data) token = JSON.parse(data);

        const removeCardFromDeckObj = await fetch("api/", {
            method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                },
            body: JSON.stringify({
                card: card
            })
        })

        const responseObj = await removeCardFromDeckObj.json();

        if(responseObj) {
            //set deck state with returned deck from api
        }
    }

    const handleAddCardToDeck = async (card: cardInterface) => {
        //make api call with card to add, then set state with returned deck
        const data = window.localStorage.getItem("AccessToken");

        let token;

        if(data) token = JSON.parse(data);

        const addCardToDeckObj = await fetch("api/", {
            method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                },
            body: JSON.stringify({
                card: card
            })
        })

        const responseObj = await addCardToDeckObj.json();

        if(responseObj) {
            //set deck state with returned deck from api
        }
    }

    const openHelpModal = () => {
        setHelpModalOpen(true);
        prop.handleOverlayChange();
    }

    const closeHelpMOdal = () => {
        setHelpModalOpen(false);
        prop.handleOverlayChange();
    }

    const navigateBack = () => {
        navigate("/collection");
    }

    useEffect(() => {
        //setDeckToEdit(location.state.currentDeck);
        console.log(location.state.currentDeckId);
        console.log(param.id);

        ///
        setUserCards([
            {id:"111111p", name: "Vegeta", description:"Galick Gun!!!", cost:1, power:9000, flip: false},
            {id:"2222222p", name:"Trunks", description:"Burning Attack!", cost:1, power:1600, flip: false},
            {id:"45454545p", name: "krillin", description:"Galick Gun!!!", cost:1, power:9000, flip: false},
            {id:"33333333p", name:"Cell", description:"Burning Attack!", cost:1, power:1600, flip: false},
            {id:"44444444p", name:"Frieza", description:"Burning Attack!", cost:1, power:1600, flip: false},
            {id:"55555555p", name:"Cooler", description:"Burning Attack!", cost:1, power:1600, flip: false},
            {id:"66666666p", name:"Broly", description:"Burning Attack!", cost:1, power:1600, flip: false},
            {id:"77777777p", name:"Gohan", description:"Burning Attack!", cost:1, power:1600, flip: false},
        ])
    }, [])

    return(
        <main className="deck-editor-content">
            
            <CardColleInfo card={selectedCardInfo} handleClose={closeCardColleInfo}
             infoOpen={cardInfoModalOpen} addCard={handleAddCardToDeck} openDeck={deckToEdit && deckToEdit.deck}/>
            <DeckCardInfo card={selectedDeckCardInfo} handleClose={closeDeckCardInfo} infoOpen={deckCardInfoModalOpen}
                removeCard={handleRemoveCardFromDeck}/>
            <CollectionHelpModal modalIsOpen={helpModalOpen} handleCloseModal={closeHelpMOdal}/>
            <Overlay isOpen={prop.overlayIsOpen}/>
            <button className="deck-editor-back-btn" onClick={navigateBack}>back</button>
            <section className={`deck-editor-section-one-building`}>
                {/* <Decks deckBuilderIsOpen={deckBuilderOpen} handleOpenDeckBuilder={openDeckBuilder} handleCloseDeckBuilder={closeDeckBuilder}
                    handleCurrentDeck={handleDeckInView} currentDeck={deckInView} handleCardInfo={handleCardInfoFromDeck}
                    handleNewDeck={handleCreateNewDeck} handleDeleteDeck={handleDeleteDeck} userDecks={userDecks}/>
                 */}
                 <button className="deck-editor-help-btn" onClick={openHelpModal}>?</button>
            </section>
            <section className="deck-editor-section-two">
                <CardsCollection userCards={userCards} cardInfoOpen={cardInfoModalOpen} handleOpenCardInfo={openCardColleInfo}/>
            </section>
        </main>
    )
}

export default DeckEditor;