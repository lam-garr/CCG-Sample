import cardInterface from "./cardInterface";

export default interface locationPropInterface{
    id?: string,
    handleDrag: (e: React.DragEvent, data: cardInterface) => void,
    handleDragLeave: (e: React.DragEvent) => void,
    handleOnDrag: (e: React.DragEvent) => void,
    handleOnDrop: (e: React.DragEvent) => void,
    cards: cardInterface[],
    hover: boolean,
    draggingCard: string,
    dragEndCard: (e: React.DragEvent) => void,
    playedCards: cardInterface[],
    myMana: number;
}