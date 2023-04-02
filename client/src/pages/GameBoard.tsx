import React, { useState, useEffect } from "react";
import Location from "../components/Location";
import Card from "../components/Card";
import CardInfo from "../components/CardInfo";
import GameInfo from "../components/GameInfo";
import cardInterface from "../utils/interfaces/cardInterface";
import locationInterface from "../utils/interfaces/locationInterface";
import findObjectWithId from "../utils/functions/findObjectWithId";
import gameBoardPropInterface from "../utils/interfaces/gameBoardPropInterface";
import "../styles/GameBoard.css";

function GameBoard(prop: gameBoardPropInterface){

    //handle data in hand and locations
    const [ hand, setHand ] = useState<cardInterface[]>([{id:"111111p", name: "Vegeta", description:"Galick Gun!!!", cost:1, power:9000, flip: false},
                                                        {id:"2222222p", name:"Trunks", description:"Burning Attack!", cost:1, power:1600, flip: false},
                                                        {id:"45454545p", name: "krillin", description:"Galick Gun!!!", cost:1, power:9000, flip: false}
                                                        ]);

    const [ leftLocation, setLeftLocation ] = useState<cardInterface[]>([]);

    const [ middleLocation, setMiddleLocation ] = useState<cardInterface[]>([]);

    const [ rightLocation, setRightLocation ] = useState<cardInterface[]>([]);

    const [ oppLeftLocation, setOppLeftLocation ] = useState<cardInterface[]>([]);

    const [ oppMiddleLocation, setOppMiddleLocation ] = useState<cardInterface[]>([]);

    const [ oppRightLocation, setOppRightLocation ] = useState<cardInterface[]>([]);

    const [ playerTimeOut, setPlayerTimeOut ] = useState(0);

    const [ oppTimeOut, setOppTimeOut ] = useState(0);

    const [ dragging, setDragging ] = useState<string>("");

    //array for cards that have already been played and cannot be moved
    const [ played, setPlayed ] = useState<cardInterface[]>([]);

    //state for amount of energy or mana player has
    const [ mana, setMana ] = useState(1);

    //state for handling turn number
    const [ turn, setTurn ] = useState(3);

    //state for displaying cards on select
    const [ selectedCard, setSelectedCard ] = useState<cardInterface>();

    //state for displaying locations on select
    const [ selectedLocation, setSelectedLocation ] = useState<locationInterface>();

    //state for handling the order cards are played
    const [ playOrder, setPlayOrder ] = useState<cardInterface[]>([]);

    //state for handling returned play order from api
    const [ apiPlayOrder, setApiPlayOrder ] = useState<cardInterface[]>([]);

    //state for handling the order opponent's cards are played
    const [ oppPlayOrder, setOppPlayOrder ] = useState<cardInterface[]>([
    {id:"111111o", name: "Vegeta", description:"Galick Gun!!!", cost:1, power:9000, flip: false},
    {id:"123456o", name: "Omega Shenron", description:"HAHAHAHA!!!", cost:1, power:9000, flip: false},
    {id:"987654o", name: "Beerus", description:"Destruction!!!", cost:1, power:9000, flip: false},
    {id:"246810o", name: "Broly", description:"AAARRGHHHHHHH!!!", cost:1, power:9000, flip: false},]);

    //state for display priority
    const [ priority, setPriority ] = useState<string>("opponent");

    //handle energy or mana
    const handleMana = (amount: number) => {
        setMana(prev => prev + amount);
    }

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
            if(targetObj){
                setHand(prev => [...prev, targetObj]);
                setPlayOrder(prev => {return prev.filter(item => item !== targetObj)});
                handleMana(targetObj.cost);
            }
        }

        if(extractedCardData[1] === "mid"){
            const targetObj = findObjectWithId(extractedCardData[0], middleLocation);
            setMiddleLocation(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj){
                setHand(prev => [...prev, targetObj]);
                setPlayOrder(prev => {return prev.filter(item => item !== targetObj)});
                handleMana(targetObj.cost);
            }
        }

        if(extractedCardData[1] === "right"){
            const targetObj = findObjectWithId(extractedCardData[0], rightLocation);
            setRightLocation(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj){
                setHand(prev => [...prev, targetObj]);
                setPlayOrder(prev => {return prev.filter(item => item !== targetObj)});
                handleMana(targetObj.cost);
            }
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
            if(targetObj){
                setLeftLocation(prev => [...prev, targetObj]);
                setPlayOrder(prev => [...prev, targetObj]);
                handleMana(-Math.abs(targetObj.cost));
            }
        }

        if(extractedCardData[1] === "mid"){
            const targetObj = findObjectWithId(extractedCardData[0], middleLocation);
            setMiddleLocation(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj){
                setLeftLocation(prev => [...prev, targetObj]);
                
            }
        }

        if(extractedCardData[1] === "right"){
            const targetObj = findObjectWithId(extractedCardData[0], rightLocation);
            setRightLocation(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj){
                setLeftLocation(prev => [...prev, targetObj]);
                
            }
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
            if(targetObj){
                setMiddleLocation(prev => [...prev, targetObj]);
                setPlayOrder(prev => [...prev, targetObj]);
                handleMana(-Math.abs(targetObj.cost));
            }
        }

        if(extractedCardData[1] === "left"){
            const targetObj = findObjectWithId(extractedCardData[0], leftLocation);
            setLeftLocation(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj){
                setMiddleLocation(prev => [...prev, targetObj]);
                
            }
        }

        if(extractedCardData[1] === "right"){
            const targetObj = findObjectWithId(extractedCardData[0], rightLocation);
            setRightLocation(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj){
                setMiddleLocation(prev => [...prev, targetObj]);
                
            }
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
            if(targetObj){
                setRightLocation(prev => [...prev, targetObj]);
                setPlayOrder(prev => [...prev, targetObj]);
                handleMana(-Math.abs(targetObj.cost));
            }
        }

        if(extractedCardData[1] === "left"){
            const targetObj = findObjectWithId(extractedCardData[0], leftLocation);
            setLeftLocation(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj){
                setRightLocation(prev => [...prev, targetObj]);
                
            }
        }

        if(extractedCardData[1] === "mid"){
            const targetObj = findObjectWithId(extractedCardData[0], middleLocation);
            setMiddleLocation(prev => {return prev.filter(item => item.id !== extractedCardData[0])});
            if(targetObj){
                setRightLocation(prev => [...prev, targetObj]);
                
            }
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
        setTurn(prev => prev + 1);
        leftLocation.forEach(item => setPlayed(prev => [...prev, item]));
        middleLocation.forEach(item => setPlayed(prev => [...prev, item]));
        rightLocation.forEach(item => setPlayed(prev => [...prev, item]));

        //disable end turn button, then enable at end

        //make api call to get retrned data

        let playerMock1 = [{id:"111111p", name: "Vegeta", description:"Galick Gun!!!", cost:1, power:9000, flip: true}, {id:"45454545p", name: "krillin", description:"Galick Gun!!!", cost:1, power:9000, flip: true}]
        let playerMock2 = [{id:"2222222p", name:"Trunks", description:"Burning Attack!", cost:1, power:1600, flip: true}]
        const oppMock1 = [{id:"111111o", name: "Vegeta", description:"Galick Gun!!!", cost:1, power:9000, flip: false},{id:"987654o", name: "Beerus", description:"Destruction!!!", cost:1, power:9000, flip: false}]
        const oppMock2 = [{id:"123456o", name: "Omega Shenron", description:"Galick Gun!!!", cost:1, power:9000, flip: true},{id:"246810o", name: "Broly", description:"AAARRGHHHHHHH!!!", cost:1, power:9000, flip: false}]
       
        //set apiPlayOrder with data returned from api after call
        setApiPlayOrder([{id:"45454545p", name: "krillin", description:"Galick Gun!!!", cost:1, power:9000, flip: false},
        {id:"2222222p", name:"Trunks", description:"Burning Attack!", cost:1, power:1600, flip: false},
        {id:"111111p", name: "Vegeta", description:"Galick Gun!!!", cost:1, power:9000, flip: false}])

        //check priority for cards to be displayed
        if(priority === "player"){

            setOppTimeOut(playOrder.length);
            oppPlayOrder.forEach((card, i) => {
                //check if returned location data for opp contains the card played
                //apiResponse.oppLeftLocation.includes(card)
                if(true){
                        setOppLeftLocation(oppMock1)
                }
    
                if(true){
                        setOppMiddleLocation(oppMock2)
                }
    
                if(oppRightLocation.includes(card)){
    
                }
            })

            playOrder.forEach(card => {
                if(leftLocation.includes(card)){
                    //set location with data from server
                    setLeftLocation(playerMock1)
                }
    
                if(middleLocation.includes(card)){
                    setMiddleLocation(playerMock2)
                }
    
                if(rightLocation.includes(card)){
    
                }
            })

            setPlayOrder([]);   
            return;

        }

        if(priority === "opponent"){
            setPlayerTimeOut(oppPlayOrder.length);
            oppPlayOrder.forEach((card, i) => {
                //check if returned location data for opp contains the card played
                //apiResponse.oppLeftLocation.includes(card)
                if(true){
                    //set opp location with data from server
                        setOppLeftLocation(oppMock1)
                }
    
                if(true){
                    //set opp location with data from server
                        setOppMiddleLocation(oppMock2)
                }
    
                if(oppRightLocation.includes(card)){
    
                }
                
            })

            playOrder.forEach(card => {
                if(leftLocation.includes(card)){
                    //set location with data from server
                    setLeftLocation(playerMock1)
                }
    
                if(middleLocation.includes(card)){
                    setMiddleLocation(playerMock2)
                }
    
                if(rightLocation.includes(card)){
    
                }
            })

            setPlayOrder([]); 
            return;
        }
    }

    //useEffect to handle mana change when turn ends
    useEffect(() => {
        setMana(turn);
    }, [turn])

    //function for displaying card info
    const displayCardInfo = (cardData: cardInterface) => {
        setSelectedCard(cardData);
    }

    //open close card display
    const [ displayOpen, setDisplayOpen ] = useState(false);

    const toggleCardDisplay = () => {
        setDisplayOpen(!displayOpen);
    }

    const turnOffCardDisplay = () => {
        setDisplayOpen(false);
        setLocationSelected(false);
    }

    //handle location display
    const [ locationSelected, setLocationSelected ] = useState(false);

    const handleDisplayingLocation = (locationData: locationInterface) => {
        setLocationSelected(true);
        setDisplayOpen(!displayOpen);
        setSelectedLocation(locationData);
    }


    return(
        <main className="board">
            <section className="left-board">
                <CardInfo id={selectedCard} infoOpen={displayOpen} toggleDisplay={turnOffCardDisplay} isLocation={locationSelected} locationId={selectedLocation}/>
                {playOrder && playOrder.map((card) => {
                    return(<span>{card.name}</span>)
                })}
            </section>
            <section className="mid-board">
                <section className="board-locations">
                    <Location id={{id:"1111", name:"Kame House", description:"", playerPower: 0, oppPower: 0}} handleDrag={handleDragFromLeft} handleOnDrag={handleDragOverLeftLocation}
                        handleDragLeave={handleDragLeaveLeftLocation} handleOnDrop={handleDropLeftLocation} cards={leftLocation}
                        oppCards={oppLeftLocation} hover={hoverLeft} draggingCard={dragging}
                        dragEndCard={cardDragEnd} playedCards={played} myMana={mana} 
                        selectCard={displayCardInfo} toggleDisplay={toggleCardDisplay} handleLocationDisplay={handleDisplayingLocation}
                        playerTimeOutLength={playerTimeOut} oppTimeOutLength={oppTimeOut} playerPlayOrder={apiPlayOrder}
                        opponentPlayOrder={oppPlayOrder}/>
                    <Location id={{id:"2222", name:"Frieza's Hell", description:"", playerPower: 0, oppPower: 0}} handleDrag={handleDragFromMid} handleOnDrag={handleDragOverMidLocation}
                        handleDragLeave={handleDragLeaveMidLocation} handleOnDrop={handleDropMidLocation} cards={middleLocation}
                        oppCards={oppMiddleLocation} hover={hoverMid} draggingCard={dragging}
                        dragEndCard={cardDragEnd} playedCards={played} myMana={mana}
                        selectCard={displayCardInfo} toggleDisplay={toggleCardDisplay} handleLocationDisplay={handleDisplayingLocation}
                        playerTimeOutLength={playerTimeOut} oppTimeOutLength={oppTimeOut} playerPlayOrder={apiPlayOrder}
                        opponentPlayOrder={oppPlayOrder}/> 
                    <Location id={{id:"3333", name:"Cell Games", description:"", playerPower: 0, oppPower: 0}} handleDrag={handleDragFromRight} handleOnDrag={handleDragOverRightLocation}
                        handleDragLeave={handleDragLeaveRightLocation} handleOnDrop={handleDropRightLocation} cards={rightLocation}
                        oppCards={oppRightLocation} hover={hoverRight} draggingCard={dragging}
                        dragEndCard={cardDragEnd} playedCards={played} myMana={mana}
                        selectCard={displayCardInfo} toggleDisplay={toggleCardDisplay} handleLocationDisplay={handleDisplayingLocation}
                        playerTimeOutLength={playerTimeOut} oppTimeOutLength={oppTimeOut} playerPlayOrder={apiPlayOrder}
                        opponentPlayOrder={oppPlayOrder}/>
                </section>
                <section className="bottom">
                    <div className="hand" onDrop={handleDropToHand} onDragOver={handleDragOverHand}>
                        {hand && hand.map((card, i) => {
                            return(<Card handleDrag={handleDragFromHand} id={card} draggingCard={dragging}
                                    dragEnd={cardDragEnd} inLocation={false} manaAmount={mana}
                                    from={"hand"} selectCard={displayCardInfo} toggleDisplay={toggleCardDisplay}/>)
                        })}
                    </div>
                </section>
            </section>
            <section className="right-board">
               <GameInfo userHand={hand.length} userDeck={0} oppHand={0}
                oppDeck={0} mana={mana} turn={turn}
                endTurnFn={endMyTurn} handleOverlayChange={prop.handleOverlayChange} overlayIsOpen={prop.overlayIsOpen}/>
            </section>   
        </main>
    )
}

export default GameBoard;
