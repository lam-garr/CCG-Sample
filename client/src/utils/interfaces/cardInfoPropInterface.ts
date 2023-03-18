import cardInterface from "./cardInterface";
import locationInterface from "./locationInterface";

export default interface cardInfoPropInterface{
    id: cardInterface | undefined,
    infoOpen: boolean,
    toggleDisplay: () => void,
    isLocation?: boolean,
    locationId?: locationInterface | undefined;
}