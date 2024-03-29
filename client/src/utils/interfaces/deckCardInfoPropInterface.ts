import cardInterface from "./cardInterface";

export default interface deckCardInfoPropInterface{
    card: cardInterface | undefined,
    handleClose: () => void,
    deckBuilder?: boolean,
    cardInDeck?: boolean,
    fromDeck?: boolean,
    removeCard: (card: cardInterface) => void,
    infoOpen: boolean;
}