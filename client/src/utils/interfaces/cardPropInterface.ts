import cardInterface from "./cardInterface";

export default interface cardPropInterface{
    id: cardInterface,
    handleDrag: (e: React.DragEvent, data: cardInterface) => void,
    draggingCard: string,
    dragEnd: (e: React.DragEvent) => void,
    inLocation: boolean,
    isDraggable?: boolean,
    manaAmount?: number,
    from: string,
    selectCard: (cardData: cardInterface) => void,
    toggleDisplay: () => void;
}