export default interface gameInfoPropInterface{
    userHand: number,
    userDeck: number,
    oppHand: number,
    oppDeck: number,
    mana: number,
    turn: number,
    endTurnFn: () => void;
}