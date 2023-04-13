import cardInterface from "./cardInterface";
import userDeckInterface from "./userDeckInterface";

export default interface deckPropInterface{
    deckBuilderIsOpen: boolean;
    handleOpenDeckBuilder: () => void,
    handleCloseDeckBuilder: () => void,
    handleCurrentDeck: (deck: userDeckInterface) => void,
    currentDeck: userDeckInterface | undefined,
    handleCardInfo: (card: cardInterface) => void,
    handleNewDeck: () => void,
    handleDeleteDeck: (deck: userDeckInterface) => void,
    userDecks: userDeckInterface[];
}