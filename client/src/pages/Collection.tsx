import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CollectionHelpModal from "../components/CollectionHelpModal";
import Overlay from "../components/Overlay";
import Decks from "../components/Decks";
import CardsCollection from "../components/CardsCollection";
import CardColleInfo from "../components/CardColleInfo";
import DeckCardInfo from "../components/DeckCardInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import collectionPropInterface from "../utils/interfaces/collectionPropInterface";
import cardInterface from "../utils/interfaces/cardInterface";
import userDeckInterface from "../utils/interfaces/userDeckInterface";
import "../styles/Collection.css";

function Collection(prop: collectionPropInterface){

    const [ helpModalOpen, setHelpModalOpen ] = useState(false);

    const [ deckBuilderOpen, setDeckBuilderOpen ] = useState(false);

    const [ userDecks, setUserDecks ] = useState<userDeckInterface[]>([]);

    const [ userCards, setUserCards ] = useState<any[]>([]);

    const [ cardInfoModalOpen, setCardInfoModalOpen ] = useState(false);

    const [ deckCardInfoModalOpen, setDeckCardInfoModalOpen ] = useState(false);

    const [ selectedCardInfo, setSelectedCardInfo ] = useState<cardInterface>();

    const [ selectedDeckCardInfo, setSelectedDeckCardInfo ] = useState<cardInterface>();

    const [ deckInView, setDeckInView ] = useState<cardInterface[]>([]);

    const [ currentDeckId, setCurrentDeckId ] = useState("");

    const [ infoFromDeck, setInfoFromDeck ] = useState(false);

    const navigate = useNavigate();

    const openHelpModal = () => {
        setHelpModalOpen(true);
        prop.handleOverlayChange();
    }

    const closeHelpMOdal = () => {
        setHelpModalOpen(false);
        prop.handleOverlayChange();
    }

    const navigateToMenu = () => {
        navigate("/")
    }

    const openDeckBuilder = () => {
        setDeckBuilderOpen(true);
    }

    const closeDeckBuilder = () => {
        setDeckBuilderOpen(false);
    }

    const openCardColleInfo = (card: cardInterface) => {
        setSelectedCardInfo(card);
        setCardInfoModalOpen(true);
        prop.handleOverlayChange();
    }

    const closeCardColleInfo = () => {
        setCardInfoModalOpen(false);
        prop.handleOverlayChange();
    }

    const handleDeckInView = (deck: cardInterface[], id: string) => {
        //const deck = userDecks.find(deck => deck.id === id)

        setDeckInView(deck);
    }

    const handleCardInfoFromDeck = (card: cardInterface) => {
        setSelectedDeckCardInfo(card);
        setDeckCardInfoModalOpen(true);
        prop.handleOverlayChange();
    }

    const closeDeckCardInfo = () => {
        setDeckCardInfoModalOpen(false);
        prop.handleOverlayChange();
    }

    const handleAddCardToDeck = (card: cardInterface) => {
        setDeckInView(prev => [...prev, card]);
    }

    const handleRemoveCardFromDeck = (card: cardInterface) => {
        setDeckInView(prev => {return prev.filter(item => item.id !== card.id)})
    }

    const handleCreateNewDeck = () => {
        const newDeck = {id: `${Math.floor(Math.random() * 1000)}`, title: `untitled`, deck:[{id:"666999p", name: "Bulma", description:"Galick Gun!!!", cost:1, power:9000, flip: false}]}
        setDeckInView(newDeck.deck);
        setUserDecks(prev => [...prev, newDeck])
        //setDeckInView(userDecks[userDecks.length - 1].deck);
        setDeckBuilderOpen(true);
    }

    const handleDeleteDeck = () => {
        setUserDecks(prev => {return prev.filter(item => item.deck !== deckInView)})
        setDeckBuilderOpen(false);
    }

    //useEffect to call api
    useEffect(() => {
        //set returned data
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

        setUserDecks([
            {id: `${Math.floor(Math.random() * 1000)}`, title: "deck 1", deck: [
                {id:"111111p", name: "Vegeta", description:"Galick Gun!!!", cost:1, power:9000, flip: false},
                {id:"2222222p", name:"Trunks", description:"Burning Attack!", cost:1, power:1600, flip: false},
                {id:"45454545p", name: "krillin", description:"Galick Gun!!!", cost:1, power:9000, flip: false},
                {id:"33333333p", name:"Cell", description:"Burning Attack!", cost:1, power:1600, flip: false},
                {id:"44444444p", name:"Frieza", description:"Burning Attack!", cost:1, power:1600, flip: false},
                {id:"55555555p", name:"Cooler", description:"Burning Attack!", cost:1, power:1600, flip: false},
                {id:"66666666p", name:"Broly", description:"Burning Attack!", cost:1, power:1600, flip: false}
            ]},
            {id: `${Math.floor(Math.random() * 1000)}`, title: "deck 2", deck: [
                {id:"111111p", name: "Vegeta", description:"Galick Gun!!!", cost:1, power:9000, flip: false},
                {id:"2222222p", name:"Trunks", description:"Burning Attack!", cost:1, power:1600, flip: false},
                {id:"45454545p", name: "krillin", description:"Galick Gun!!!", cost:1, power:9000, flip: false},
                {id:"33333333p", name:"Cell", description:"Burning Attack!", cost:1, power:1600, flip: false},
                {id:"44444444p", name:"Frieza", description:"Burning Attack!", cost:1, power:1600, flip: false},
                {id:"55555555p", name:"Cooler", description:"Burning Attack!", cost:1, power:1600, flip: false},
                {id:"66666666p", name:"Broly", description:"Burning Attack!", cost:1, power:1600, flip: false}
            ]},
            {id: `${Math.floor(Math.random() * 1000)}`, title: "deck 3", deck: [
                {id:"111111p", name: "Vegeta", description:"Galick Gun!!!", cost:1, power:9000, flip: false},
                {id:"2222222p", name:"Trunks", description:"Burning Attack!", cost:1, power:1600, flip: false},
                {id:"45454545p", name: "krillin", description:"Galick Gun!!!", cost:1, power:9000, flip: false},
                {id:"33333333p", name:"Cell", description:"Burning Attack!", cost:1, power:1600, flip: false},
                {id:"44444444p", name:"Frieza", description:"Burning Attack!", cost:1, power:1600, flip: false},
                {id:"55555555p", name:"Cooler", description:"Burning Attack!", cost:1, power:1600, flip: false}
            ]}
        ])
    }, [])

    return(
        <main className="collection-content">
            <CardColleInfo card={selectedCardInfo} handleClose={closeCardColleInfo} deckBuilder={deckBuilderOpen}
             infoOpen={cardInfoModalOpen} addCard={handleAddCardToDeck} openDeck={deckInView}/>
            <DeckCardInfo card={selectedDeckCardInfo} handleClose={closeDeckCardInfo} infoOpen={deckCardInfoModalOpen}
                removeCard={handleRemoveCardFromDeck}/>
            <CollectionHelpModal modalIsOpen={helpModalOpen} handleCloseModal={closeHelpMOdal}/>
            <Overlay isOpen={prop.overlayIsOpen}/>
            <button className="collection-back-btn" onClick={navigateToMenu}>back</button>
            <section className={`collection-section-one ${deckBuilderOpen?"builder":""}`}>
                <Decks deckBuilderIsOpen={deckBuilderOpen} handleOpenDeckBuilder={openDeckBuilder} handleCloseDeckBuilder={closeDeckBuilder}
                    handleCurrentDeck={handleDeckInView} currentDeck={deckInView} handleCardInfo={handleCardInfoFromDeck}
                    handleNewDeck={handleCreateNewDeck} handleDeleteDeck={handleDeleteDeck} userDecks={userDecks}/>
                <button className="collection-help-btn" onClick={openHelpModal}>?</button>
            </section>
            <section className="collection-section-two">
                <CardsCollection userCards={userCards} cardInfoOpen={cardInfoModalOpen} handleOpenCardInfo={openCardColleInfo}/>
            </section>
        </main>
    )
}

export default Collection;

