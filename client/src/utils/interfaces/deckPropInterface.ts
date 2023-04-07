import cardInterface from "./cardInterface";

export default interface deckPropInterface{
    deckBuilderIsOpen: boolean;
    handleOpenDeckBuilder: () => void,
    handleCloseDeckBuilder: () => void,
    handleCurrentDeck: (deck: cardInterface[]) => void,
    currentDeck: cardInterface[],
    handleCardInfo: (card: cardInterface) => void,
    userDecks: any[];
}