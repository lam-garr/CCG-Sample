import cardInterface from "./cardInterface";

export default interface cardsCollectionsPropInterface{
    userCards: cardInterface[],
    cardInfoOpen: boolean
    handleOpenCardInfo: (card: cardInterface) => void;
}