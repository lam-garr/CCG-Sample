import cardInterface from "./cardInterface";

export default interface playingCardInterface{
    card: cardInterface,
    index: number,
    playerTimeOutLength?: number,
    oppTimeOutLength?: number,
    cardPriority?: string;
}