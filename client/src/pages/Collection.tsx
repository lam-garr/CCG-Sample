import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CollectionHelpModal from "../components/CollectionHelpModal";
import Overlay from "../components/Overlay";
import Decks from "../components/Decks";
import CardsCollection from "../components/CardsCollection";
import CardColleInfo from "../components/CardColleInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import collectionPropInterface from "../utils/interfaces/collectionPropInterface";
import cardInterface from "../utils/interfaces/cardInterface";
import "../styles/Collection.css";

function Collection(prop: collectionPropInterface){

    const [ helpModalOpen, setHelpModalOpen ] = useState(false);

    const [ deckBuilderOpen, setDeckBuilderOpen ] = useState(false);

    const [ userDecks, setUserDecks ] = useState<any[]>([]);

    const [ userCards, setUserCards ] = useState<any[]>([]);

    const [ cardInfoModalOpen, setCardInfoModalOpen ] = useState(false);

    const [ selectedCardInfo, setSelectedCardInfo ] = useState<cardInterface>()

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
        ])
    }, [])

    return(
        <main className="collection-content">
            <CardColleInfo card={selectedCardInfo} handleClose={closeCardColleInfo} deckBuilder={deckBuilderOpen} infoOpen={cardInfoModalOpen}/>
            <CollectionHelpModal modalIsOpen={helpModalOpen} handleCloseModal={closeHelpMOdal}/>
            <Overlay isOpen={prop.overlayIsOpen}/>
            <button className="collection-back-btn" onClick={navigateToMenu}>back</button>
            <section className={`collection-section-one ${deckBuilderOpen?"builder":""}`}>
                <Decks deckBuilderIsOpen={deckBuilderOpen} handleOpenDeckBuilder={openDeckBuilder} handleCloseDeckBuilder={closeDeckBuilder}/>
                <button className="collection-help-btn" onClick={openHelpModal}>?</button>
            </section>
            <section className="collection-section-two">
                <CardsCollection userCards={userCards} cardInfoOpen={cardInfoModalOpen} handleOpenCardInfo={openCardColleInfo}/>
            </section>
        </main>
    )
}

export default Collection;

