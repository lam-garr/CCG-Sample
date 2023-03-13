export default interface locationPropInterface{
    id?: string,
    handleDrag: (e: React.DragEvent, data: string) => void,
    handleOnDrag: (e: React.DragEvent) => void,
    handleOnDrop: (e: React.DragEvent) => void,
    cards: string[];
}