import { Artista } from "./artista.model";

export class Cancion{
    id?: number;
    nombre: string;
    duracion:number;
    reproducciones:number;
    generoMusical:string[];
    artista:Artista;
    album:string;

    constructor(){}

}