import cardInterface from "../interfaces/cardInterface";

export default function findObjectWithId(id: string, arrData: cardInterface[]){
    const targetObj = arrData.find(obj => {return obj.id === id});

    return targetObj;
}