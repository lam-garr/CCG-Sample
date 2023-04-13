import cardInterface from "./cardInterface";

export default interface cardColleInfoPropInterface{
    card: cardInterface | undefined,
    handleClose: () => void,
    deckBuilder: boolean,
    cardInDeck?: boolean,
    fromDeck?: boolean,
    infoOpen: boolean,
    addCard: (card: cardInterface) => void,
    openDeck: cardInterface[] | undefined;
}