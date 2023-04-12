import cardInterface from "./cardInterface";

export default interface userDeckInterface{
    id: string,
    title: string,
    deck: cardInterface[];
}