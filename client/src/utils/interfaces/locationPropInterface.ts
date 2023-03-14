export default interface locationPropInterface{
    id?: string,
    handleDrag: (e: React.DragEvent, data: string) => void,
    handleDragLeave: (e: React.DragEvent) => void,
    handleOnDrag: (e: React.DragEvent) => void,
    handleOnDrop: (e: React.DragEvent) => void,
    cards: string[],
    hover: boolean,
    draggingCard: string,
    dragEndCard: (e: React.DragEvent) => void;
}