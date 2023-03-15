export default interface cardPropInterface{
    id: string,
    handleDrag: (e: React.DragEvent, data: string) => void,
    draggingCard: string,
    dragEnd: (e: React.DragEvent) => void,
    inLocation: boolean;
}