import cardInterface from "./cardInterface";
import userDeckInterface from "./userDeckInterface";

export default interface deckPropInterface{
    deckBuilderIsOpen: boolean;
    handleOpenDeckBuilder: () => void,
    handleCloseDeckBuilder: () => void,
    handleCurrentDeck: (deck: cardInterface[], id: string) => void,
    currentDeck: cardInterface[],
    handleCardInfo: (card: cardInterface) => void,
    handleNewDeck: () => void,
    handleDeleteDeck: () => void,
    userDecks: userDeckInterface[];
}