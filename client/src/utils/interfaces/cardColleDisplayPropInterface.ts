import cardInterface from "./cardInterface";

export default interface cardColleInfoPropInterface{
    card: cardInterface | undefined,
    handleClose: () => void,
    infoOpen: boolean;
}