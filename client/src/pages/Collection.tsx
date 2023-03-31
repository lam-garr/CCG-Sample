import React, { useState, useEffect } from "react";
import "../styles/Collection.css";

function Collection(){
    return(
        <main className="collection-content">
            <section className="collection-section-one">
                <div>Decks</div>
                <button className="collection-help-btn">?</button>
            </section>
            <section className="collection-section-two">
                <div>Cards</div>
            </section>
        </main>
    )
}

export default Collection;

