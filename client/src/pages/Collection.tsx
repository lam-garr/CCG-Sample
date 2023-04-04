import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CollectionHelpModal from "../components/CollectionHelpModal";
import Overlay from "../components/Overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import collectionPropInterface from "../utils/interfaces/collectionPropInterface";
import "../styles/Collection.css";

function Collection(prop: collectionPropInterface){

    const [ helpModalOpen, setHelpModalOpen ] = useState(false);

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

    return(
        <main className="collection-content">
            <CollectionHelpModal modalIsOpen={helpModalOpen} handleCloseModal={closeHelpMOdal}/>
            <Overlay isOpen={prop.overlayIsOpen}/>
            <button className="collection-back-btn" onClick={navigateToMenu}>back</button>
            <section className="collection-section-one">
                <div>Decks</div>
                <button className="collection-help-btn" onClick={openHelpModal}>?</button>
            </section>
            <section className="collection-section-two">
                <div>Cards</div>
            </section>
        </main>
    )
}

export default Collection;

