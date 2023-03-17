import cardInterface from "./cardInterface";

export default interface cardInfoPropInterface{
    id: cardInterface | undefined,
    infoOpen: boolean,
    toggleDisplay: () => void;
}