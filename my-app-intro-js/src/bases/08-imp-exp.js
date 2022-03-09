//import heroes from "./data/heroes";

import heroes, {owners} from "../data/heroes";
//import { heroes, owners} from "./data/heroes";
//La primera es una exportacion por defecto, la segunda una exportaciones indiviuales dentro del mismo archivo

/*
const getHeroeId = (id)=>{
    return heroes.find((heroe)=>{
        if(heroe.id === id){
            return true;
        }else{
            return false;
        }
        
    }); 
}


*/


console.log(owners);

export const getHeroeById = (id)=> heroes.find(heroe => heroe.id === id); 
//console.log(getHeroeById(2));


export const getHeroeByOwner = (owner)=> heroes.filter(heroe => heroe.owner === owner); 
//console.log(getHeroeByOwner('Marvel'));


