import React, { useState, useEffect } from "react";
import Location from "../components/Location";
import Card from "../components/Card";
import "../styles/GameBoard.css";

function GameBoard(){

    //handle data in hand and locations
    const [ hand, setHand ] = useState<any[]>(["goku"]);

    const [ leftLocation, setLeftLocation ] = useState<string[]>([]);

    const [ middleLocation, setMiddleLocation ] = useState<string[]>([]);

    const [ rightLocation, setRightLocation ] = useState<string[]>([]);

    return(
        <main className="board">
            <section className="main-locations">
                <Location handleDrag={handleDragFromLeft} handleOnDrag={handleDragOverLeftLocation} handleOnDrop={handleDropLeftLocation} cards={leftLocation}/>
            </section>
            <section className="bottom">
                <div className="hand">
                    {hand && hand.map((card, i) => {
                        return(<Card handleDrag={handleDragFromHand} id={card}/>)
                    })}
                </div>
            </section>
        </main>
    )
}

export default GameBoard;
