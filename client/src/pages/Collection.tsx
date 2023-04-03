import React, { useState, useEffect } from "react";
import CollectionHelpModal from "../components/CollectionHelpModal";
import Overlay from "../components/Overlay";
import collectionPropInterface from "../utils/interfaces/collectionPropInterface";
import "../styles/Collection.css";

function Collection(prop: collectionPropInterface){

    const [ helpModalOpen, setHelpModalOpen ] = useState(false);

    const openHelpModal = () => {
        setHelpModalOpen(true);
        prop.handleOverlayChange();
    }

    const closeHelpMOdal = () => {
        setHelpModalOpen(false);
        prop.handleOverlayChange();
    }

    return(
        <main className="collection-content">
            <CollectionHelpModal modalIsOpen={helpModalOpen} handleCloseModal={closeHelpMOdal}/>
            <Overlay isOpen={prop.overlayIsOpen}/>
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

