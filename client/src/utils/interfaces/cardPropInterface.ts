export default interface cardPropInterface{
    id: string,
    handleDrag: (e: React.DragEvent, data: string) => void;
}