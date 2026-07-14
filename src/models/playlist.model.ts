import { Cancion } from "./cancion.model";

export class Playlist{

    id: number;
    nombre: string;
    fechaCreacion:Date;
    canciones: Cancion[];

    constructor(){}
}