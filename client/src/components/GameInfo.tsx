import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import gameInfoPropInterface from "../utils/interfaces/gameInfoPropInterface";
import "../styles/GameInfo.css";

function GameInfo(prop: gameInfoPropInterface){

    const [ gameInfoOpen, setGameInfoOpen ] = useState(false);

    const gameInfoOnClick = () => {
        setGameInfoOpen(!gameInfoOpen);
    }

    return(
        <section className="board-content">
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
                            <button className="bottom-right-buddy">retreat</button>
                        </div>) : 
                        (<div className="no-retreat-btn"></div>)
                    }
                </div>
            </section> 
    )
}

export default GameInfo;