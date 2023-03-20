import React from "react";
import gameInfoPropInterface from "../utils/interfaces/gameInfoPropInterface";
import "../styles/GameInfo.css";

function GameInfo(prop: gameInfoPropInterface){
    return(
        <section className="board-content">
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
                <span>{`mana: ${prop.mana}`}</span>
                <div className="extra-space-bottom"></div>
                <div>
                    <button className="snap-btn">!</button>
                </div>
                <div className="user-btns">
                    <div></div>
                    <button className="end-turn-btn" onClick={prop.endTurnFn}>{`end turn ${prop.turn}`}</button>
                    <div className="retreat-btn">
                        <button>retreat</button>
                    </div>
                </div>
            </section> 
    )
}

export default GameInfo;