import locationInterface from "./locationInterface";
import cardInterface from "./cardInterface";

export default interface locationPropInterface{
    locationInfo: locationInterface | undefined,
    handleDrag: (e: React.DragEvent, data: cardInterface) => void,
    handleDragLeave: (e: React.DragEvent) => void,
    handleOnDrag: (e: React.DragEvent) => void,
    handleOnDrop: (e: React.DragEvent) => void,
    cards: cardInterface[],
    oppCards: cardInterface[],
    hover: boolean,
    draggingCard: string,
    dragEndCard: (e: React.DragEvent) => void,
    playedCards: cardInterface[],
    myMana: number,
    selectCard: (cardData: cardInterface) => void,
    toggleDisplay: () => void,
    handleLocationDisplay: (locationData: locationInterface) => void,
    playerTimeOutLength: number,
    oppTimeOutLength: number,
    playerPlayOrder: cardInterface[],
    opponentPlayOrder: cardInterface[];
}