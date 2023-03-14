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

    const [ dragging, setDragging ] = useState<string>("");

    //handle drag from hand
    const handleDragFromHand = (e: React.DragEvent, data: string) => {
        e.dataTransfer.setData("handData", `${data}-hand`);
        
        setTimeout(() => {
            setDragging(data);
        }, 0)
    }

    //handle dropping to hand
    const handleDropToHand = (e: React.DragEvent) => {
        e.preventDefault();

        //setHoverLeft(false);

        setDragging("");

        const cardData = e.dataTransfer.getData("handData") as string;

        const extractedCardData = cardData.split("-");

        if(hand.includes(extractedCardData[0])) return;

        if(extractedCardData[1] === "left"){
            setLeftLocation(prev => {return prev.filter(item => item !== extractedCardData[0])});
            setHand(prev => [...prev, extractedCardData[0]]);
        }

        if(extractedCardData[1] === "mid"){
            setMiddleLocation(prev => {return prev.filter(item => item !== extractedCardData[0])});
            setHand(prev => [...prev, extractedCardData[0]]);
        }
    }

    //handle dragover to hand
    const handleDragOverHand = (e: React.DragEvent) => {
        e.preventDefault();
        setHoverLeft(false);
        setHoverMid(false);
    }

    //Left location handling**************

    //handle drag from left location
    const handleDragFromLeft = (e: React.DragEvent, data: string) => {
        e.dataTransfer.setData("handData", `${data}-left`);
        
        setTimeout(() => {
            setDragging(data);
        }, 0)
    }

    //handle drop to left location
    const handleDropLeftLocation = (e: React.DragEvent) => {
        e.preventDefault();

        //setHoverLeft(false);

        setDragging("");

        setHoverLeft(false);

        const cardData = e.dataTransfer.getData("handData") as string;

        const extractedCardData = cardData.split("-");

        if(leftLocation.includes(extractedCardData[0])) return;

        if(extractedCardData[1] === "hand"){
            setHand(prev => {return prev.filter(item => item !== extractedCardData[0])});
            setLeftLocation(prev => [...prev, extractedCardData[0]]);
        }

        if(extractedCardData[1] === "mid"){
            setMiddleLocation(prev => {return prev.filter(item => item !== extractedCardData[0])});
            setLeftLocation(prev => [...prev, extractedCardData[0]]);
        }
    }

    const [ hoverLeft, setHoverLeft ] = useState(false);

    //handle drag over to left location
    const handleDragOverLeftLocation = (e: React.DragEvent) => {
        e.preventDefault();
        setHoverLeft(true);
        setHoverMid(false);
    }

    //handle drag leave from left location
    const handleDragLeaveLeftLocation = (e: React.DragEvent) => {
        e.preventDefault();
        setHoverLeft(false);
    }

    //Middle location handling**********

    //handle drag from middle location
    const handleDragFromMid = (e: React.DragEvent, data: string) => {
        e.dataTransfer.setData("handData", `${data}-mid`);
        
        setTimeout(() => {
            setDragging(data);
        }, 0)
    }

    //handle drop to mid location
    const handleDropMidLocation = (e: React.DragEvent) => {
        e.preventDefault();

        setDragging("");

        setHoverMid(false);

        const cardData = e.dataTransfer.getData("handData") as string;

        const extractedCardData = cardData.split("-");

        if(middleLocation.includes(extractedCardData[0])) return;

        if(extractedCardData[1] === "hand"){
            setHand(prev => {return prev.filter(item => item !== extractedCardData[0])});
            setMiddleLocation(prev => [...prev, extractedCardData[0]]);
        }

        if(extractedCardData[1] === "left"){
            setLeftLocation(prev => {return prev.filter(item => item !== extractedCardData[0])});
            setMiddleLocation(prev => [...prev, extractedCardData[0]]);
        }
    }

    const [ hoverMid, setHoverMid ] = useState(false);

    //handle drag over to mid location
    const handleDragOverMidLocation = (e: React.DragEvent) => {
        e.preventDefault();
        setHoverMid(true);
        setHoverLeft(false);
    }

    //handle drag leave from mid location
    const handleDragLeaveMidLocation = (e: React.DragEvent) => {
        e.preventDefault();
        setHoverMid(false);
        setHoverLeft(false);
    }

    return(
        <main className="board">
            <section className="main-locations">
                <Location handleDrag={handleDragFromLeft} handleOnDrag={handleDragOverLeftLocation} handleDragLeave={handleDragLeaveLeftLocation} handleOnDrop={handleDropLeftLocation} cards={leftLocation} hover={hoverLeft} draggingCard={dragging}/>
                <Location handleDrag={handleDragFromMid} handleOnDrag={handleDragOverMidLocation} handleDragLeave={handleDragLeaveMidLocation} handleOnDrop={handleDropMidLocation} cards={middleLocation} hover={hoverMid} draggingCard={dragging}/>
            </section>
            <section className="bottom">
                <div className="hand" onDrop={handleDropToHand} onDragOver={handleDragOverHand}>
                    {hand && hand.map((card, i) => {
                        return(<Card handleDrag={handleDragFromHand} id={card} draggingCard={dragging}/>)
                    })}
                </div>
            </section>
        </main>
    )
}

export default GameBoard;
