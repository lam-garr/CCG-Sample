import React, { useState, useEffect } from "react";
import Location from "../components/Location";
import Card from "../components/Card";
import CardInfo from "../components/CardInfo";
import cardInterface from "../utils/interfaces/cardInterface";
import findObjectWithId from "../utils/functions/findObjectWithId";
import "../styles/GameBoard.css";

function GameBoard(){

    //handle data in hand and locations
    const [ hand, setHand ] = useState<cardInterface[]>([{id:"Goku", cost:2, power:9000},
                                                        {id:"Trunks", cost:3, power:1600}]);

    const [ leftLocation, setLeftLocation ] = useState<cardInterface[]>([]);

    const [ middleLocation, setMiddleLocation ] = useState<cardInterface[]>([]);

    const [ rightLocation, setRightLocation ] = useState<cardInterface[]>([]);

    const [ dragging, setDragging ] = useState<string>("");

    //array for cards that have already been played and cannot be moved
    const [ played, setPlayed ] = useState<cardInterface[]>([]);

    //state for amount of energy or mana player has
    const [ mana, setMana ] = useState(1);

    //state for displaying cards on select
    const [ selectedCard, setSelectedCard ] = useState<cardInterface>();

    //handle drag from hand
    const handleDragFromHand = (e: React.DragEvent, data: cardInterface) => {
        e.dataTransfer.setData("handData", `${data.id}-hand`);
        
        setTimeout(() => {
            setDragging(data.id);
        }, 0)
    }

    //handle dropping to hand
    const handleDropToHand = (e: React.DragEvent) => {
        e.preventDefault();

        //setHoverLeft(false);

        setDragging("");

        const cardData = e.dataTransfer.getData("handData") as string;

        const extractedCardData = cardData.split("-");

        //if(hand.includes(dragObj)) return;

        if(hand.find(obj => {return obj.id === extractedCardData[0]})) return;

        if(extractedCardData[1] === "left"){
            const targetObj = findObjectWithId(extractedCardData[0], leftLocation);
            setLeftLocation(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj) setHand(prev => [...prev, targetObj]);
        }

        if(extractedCardData[1] === "mid"){
            const targetObj = findObjectWithId(extractedCardData[0], middleLocation);
            setMiddleLocation(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj) setHand(prev => [...prev, targetObj]);
        }

        if(extractedCardData[1] === "right"){
            const targetObj = findObjectWithId(extractedCardData[0], rightLocation);
            setRightLocation(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj) setHand(prev => [...prev, targetObj]);
        }
    }

    //handle dragover to hand
    const handleDragOverHand = (e: React.DragEvent) => {
        e.preventDefault();
        setHoverLeft(false);
        setHoverMid(false);
        setHoverRight(false);
    }

    //handle drag end for card
    const cardDragEnd = (e: React.DragEvent) => {
        setDragging("");
    }

    //Left location handling**************

    //handle drag from left location
    const handleDragFromLeft = (e: React.DragEvent, data: cardInterface) => {
        e.dataTransfer.setData("handData", `${data.id}-left`);
        
        setTimeout(() => {
            setDragging(data.id);
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

        //if(leftLocation.includes(extractedCardData[0])) return;

        if(leftLocation.find(obj => {return obj.id === extractedCardData[0]})) return;

        if(extractedCardData[1] === "hand"){
            const targetObj = findObjectWithId(extractedCardData[0], hand);
            setHand(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj) setLeftLocation(prev => [...prev, targetObj]);
        }

        if(extractedCardData[1] === "mid"){
            const targetObj = findObjectWithId(extractedCardData[0], middleLocation);
            setMiddleLocation(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj) setLeftLocation(prev => [...prev, targetObj]);
        }

        if(extractedCardData[1] === "right"){
            const targetObj = findObjectWithId(extractedCardData[0], rightLocation);
            setRightLocation(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj) setLeftLocation(prev => [...prev, targetObj]);
        }
    }

    const [ hoverLeft, setHoverLeft ] = useState(false);

    //handle drag over to left location
    const handleDragOverLeftLocation = (e: React.DragEvent) => {
        e.preventDefault();
        setHoverLeft(true);
        setHoverMid(false);
        setHoverRight(false);
    }

    //handle drag leave from left location
    const handleDragLeaveLeftLocation = (e: React.DragEvent) => {
        e.preventDefault();
        setHoverLeft(false);
    }

    //Middle location handling**********

    //handle drag from middle location
    const handleDragFromMid = (e: React.DragEvent, data: cardInterface) => {
        e.dataTransfer.setData("handData", `${data.id}-mid`);
        
        setTimeout(() => {
            setDragging(data.id);
        }, 0)
    }

    //handle drop to mid location
    const handleDropMidLocation = (e: React.DragEvent) => {
        e.preventDefault();

        setDragging("");

        setHoverMid(false);

        const cardData = e.dataTransfer.getData("handData") as string;

        const extractedCardData = cardData.split("-");

        if(middleLocation.find(obj => {return obj.id === extractedCardData[0]})) return;

        if(extractedCardData[1] === "hand"){
            const targetObj = findObjectWithId(extractedCardData[0], hand);
            setHand(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj) setMiddleLocation(prev => [...prev, targetObj]);
        }

        if(extractedCardData[1] === "left"){
            const targetObj = findObjectWithId(extractedCardData[0], leftLocation);
            setLeftLocation(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj) setMiddleLocation(prev => [...prev, targetObj]);
        }

        if(extractedCardData[1] === "right"){
            const targetObj = findObjectWithId(extractedCardData[0], rightLocation);
            setRightLocation(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj) setMiddleLocation(prev => [...prev, targetObj]);
        }
    }

    const [ hoverMid, setHoverMid ] = useState(false);

    //handle drag over to mid location
    const handleDragOverMidLocation = (e: React.DragEvent) => {
        e.preventDefault();
        setHoverMid(true);
    }

    //handle drag leave from mid location
    const handleDragLeaveMidLocation = (e: React.DragEvent) => {
        e.preventDefault();
        setHoverMid(false);
    }

    //Right location handling***********

    //handle drag from right location
    const handleDragFromRight = (e: React.DragEvent, data: cardInterface) => {
        e.dataTransfer.setData("handData", `${data.id}-right`);
        
        setTimeout(() => {
            setDragging(data.id);
        }, 0)
    }

    //handle drop to right location
    const handleDropRightLocation = (e: React.DragEvent) => {
        e.preventDefault();

        setDragging("");

        setHoverRight(false);

        const cardData = e.dataTransfer.getData("handData") as string;

        const extractedCardData = cardData.split("-");

        if(rightLocation.find(obj => {return obj.id === extractedCardData[0]})) return;

        if(extractedCardData[1] === "hand"){
            const targetObj = findObjectWithId(extractedCardData[0], hand);
            setHand(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj) setRightLocation(prev => [...prev, targetObj]);
        }

        if(extractedCardData[1] === "left"){
            const targetObj = findObjectWithId(extractedCardData[0], leftLocation);
            setLeftLocation(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj) setRightLocation(prev => [...prev, targetObj]);
        }

        if(extractedCardData[1] === "mid"){
            const targetObj = findObjectWithId(extractedCardData[0], middleLocation);
            setMiddleLocation(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj) setRightLocation(prev => [...prev, targetObj]);
        }
    }

    const [ hoverRight, setHoverRight ] = useState(false);

    //handle drag over to right location
    const handleDragOverRightLocation = (e: React.DragEvent) => {
        e.preventDefault();
        setHoverRight(true);
    }

    //handle drag leave from right location
    const handleDragLeaveRightLocation = (e: React.DragEvent) => {
        e.preventDefault();
        setHoverRight(false);
    }

    //end turn function
    const endMyTurn = () => {
        setMana(prev => prev + 1);
        leftLocation.forEach(item => setPlayed(prev => [...prev, item]));
        middleLocation.forEach(item => setPlayed(prev => [...prev, item]));
        rightLocation.forEach(item => setPlayed(prev => [...prev, item]));
    }

    //function for displaying card info
    const displayCardInfo = (cardData: cardInterface) => {
        setSelectedCard(cardData);
    }

    //open close card display
    const [ displayOpen, setDisplayOpen ] = useState(false);

    const toggleCardDisplay = () => {
        setDisplayOpen(!displayOpen);
    }

    return(
        <main className="board">
            <section className="left-board">
                <CardInfo id={selectedCard} infoOpen={displayOpen}/>
            </section>
            <section className="mid-board">
                <section className="board-locations">
                    <Location handleDrag={handleDragFromLeft} handleOnDrag={handleDragOverLeftLocation} handleDragLeave={handleDragLeaveLeftLocation} handleOnDrop={handleDropLeftLocation} cards={leftLocation} hover={hoverLeft} draggingCard={dragging} dragEndCard={cardDragEnd} playedCards={played} myMana={mana} selectCard={displayCardInfo} toggleDisplay={toggleCardDisplay}/>
                    <Location handleDrag={handleDragFromMid} handleOnDrag={handleDragOverMidLocation} handleDragLeave={handleDragLeaveMidLocation} handleOnDrop={handleDropMidLocation} cards={middleLocation} hover={hoverMid} draggingCard={dragging} dragEndCard={cardDragEnd} playedCards={played} myMana={mana} selectCard={displayCardInfo} toggleDisplay={toggleCardDisplay}/>
                    <Location handleDrag={handleDragFromRight} handleOnDrag={handleDragOverRightLocation} handleDragLeave={handleDragLeaveRightLocation} handleOnDrop={handleDropRightLocation} cards={rightLocation} hover={hoverRight} draggingCard={dragging} dragEndCard={cardDragEnd} playedCards={played} myMana={mana} selectCard={displayCardInfo} toggleDisplay={toggleCardDisplay}/>
                </section>
                <section className="bottom">
                    <div className="hand" onDrop={handleDropToHand} onDragOver={handleDragOverHand}>
                        {hand && hand.map((card, i) => {
                            return(<Card handleDrag={handleDragFromHand} id={card} draggingCard={dragging} dragEnd={cardDragEnd} inLocation={false} manaAmount={mana} from={"hand"} selectCard={displayCardInfo} toggleDisplay={toggleCardDisplay}/>)
                        })}
                    </div>
                </section>
            </section>
            <section className="right-board">
                <button onClick={endMyTurn}>end turn</button>
                <span>{mana}</span>
            </section>   
        </main>
    )
}

export default GameBoard;

//onclik for teh card component. each card has it's own id or object data twith it. setteh state with it 