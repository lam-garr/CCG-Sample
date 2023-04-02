import React, { useState } from "react";
import Overlay from "./Overlay";
import RetreatModal from "./RetreatModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import gameInfoPropInterface from "../utils/interfaces/gameInfoPropInterface";
import "../styles/GameInfo.css";

function GameInfo(prop: gameInfoPropInterface){

    const [ gameInfoOpen, setGameInfoOpen ] = useState(false);

    const [ retreatModalOpen, setRetreatModalOpen ] = useState(false);

    const gameInfoOnClick = () => {
        setGameInfoOpen(!gameInfoOpen);
    }

    const openRetreatModal = () => {
        setRetreatModalOpen(true);
        prop.handleOverlayChange();
    }

    const closeRetreatModal = () => {
        setRetreatModalOpen(false);
        prop.handleOverlayChange();
    }

    const handlePlayerRetreat = () => {

    }

    return(
        <section className="board-content">
            <RetreatModal modalIsOpen={retreatModalOpen} handleCloseModal={closeRetreatModal} handleRetreat={handlePlayerRetreat}/>
            <Overlay isOpen={prop.overlayIsOpen}/>
                {gameInfoOpen ?
                    (<div className="board-game-info">
                        <div className="extra-space-top"></div>
                        <div className="opp-info">
                            <span>{`Opponent's deck size: ?`}</span>
                            <span>{`Opponent's hand size: ?`}</span>
                            <div className="extra-space-top"></div>
                        </div>
                        <div className="player-info">
                            <span>{`Your deck size: ${prop.userDeck}`}</span>
                            <span>{`Your hand hand size: ${prop.userHand}`}</span>
                            <div className="extra-space-top"></div>
                        </div>
                        <button className="game-info-close-btn" onClick={gameInfoOnClick}>x</button>
                        <div className="extra-space-bottom"></div>
                    </div>) : 
                    <div className="game-info-close-top">
                        <button className="menu-btn" onClick={gameInfoOnClick}><FontAwesomeIcon className="menu-icon" icon={faScroll} size="lg"/></button>
                    </div>
                }
                <span>{`mana: ${prop.mana}`}</span>
                <div>
                    <button className="snap-btn">!</button>
                </div>
                <div className="user-btns">
                    <div></div>
                    <button className="end-turn-btn" onClick={prop.endTurnFn}>{`end turn ${prop.turn}`}</button>
                    {gameInfoOpen ? 
                        (<div className="retreat-btn">
                            <button className="bottom-right-buddy" onClick={openRetreatModal}>retreat</button>
                        </div>) : 
                        (<div className="no-retreat-btn"></div>)
                    }
                </div>
        </section> 
    )
}

export default GameInfo;