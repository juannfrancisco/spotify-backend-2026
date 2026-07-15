import { Injectable } from '@nestjs/common';
import { Artista } from './models/artista.model';
import { Cancion } from './models/cancion.model';

@Injectable()
export class AppService {

  private artistas:Artista[] = [];
  private canciones:Cancion[] = [];


  constructor() {
    this.inicializarArtistas();
    this.inicializarCanciones();
  }


  inicializarCanciones(){
    const cancion1 = new Cancion();
    cancion1.id = 1;
    cancion1.nombre = "Tití Me Preguntó";
    cancion1.duracion = 3.25;
    cancion1.reproducciones = 1000000;
    cancion1.generoMusical = ["Reggaeton", "Trap"];
    cancion1.artista = this.artistas[0];
    cancion1.album = "Un Verano Sin Ti";
    this.canciones.push(cancion1);


    const cancion2 = new Cancion();
    cancion2.id = 2;
    cancion2.nombre = "Hips Don't Lie";
    cancion2.duracion = 3.38;
    cancion2.reproducciones = 500000;
    cancion2.generoMusical = ["Pop", "Latino"];
    cancion2.artista = this.artistas[1];
    cancion2.album = "Oral Fixation Vol. 2";
    this.canciones.push(cancion2);


    const cancion3 = new Cancion();
    cancion3.id = 3;
    cancion3.nombre = "Viva La Vida";
    cancion3.duracion = 4.02;
    cancion3.reproducciones = 800000;
    cancion3.generoMusical = ["Rock alternativo", "Pop rock"];
    cancion3.artista = this.artistas[2];
    cancion3.album = "Viva La Vida or Death and All His Friends";
    this.canciones.push(cancion3);
  }
  
  
  inicializarArtistas() {
    const artista1 = new Artista();
    artista1.id = 1;
    artista1.nombre = "Bad Bunny";
    artista1.biografia = "Benito Antonio Martinez Ocasio, conocido profesionalmente como Bad Bunny, es un cantante, compositor y actor puertorriqueño. Es considerado uno de los artistas más influyentes del mundo y uno de los máximos exponentes del género urbano.";
    artista1.pais = "Puerto Rico";
    artista1.generoMusical = ["Reggaeton", "Trap"];
    artista1.oyentesMensuales = 1000000;
    artista1.tipo = "Solista";
    artista1.verificado = true;
    this.artistas.push(artista1);


    const artista2 = new Artista();
    artista2.id = 2;
    artista2.nombre = "Shakira";
    artista2.biografia = "Shakira Isabel Mebarak Ripoll, conocida profesionalmente como Shakira, es una cantante, compositora, bailarina y productora discográfica colombiana. Es reconocida por su versatilidad musical y su habilidad para fusionar diferentes géneros.";
    artista2.pais = "Colombia";
    artista2.generoMusical = ["Pop", "Rock", "Latino"];
    artista2.oyentesMensuales = 500000;
    artista2.tipo = "Solista";
    artista2.verificado = true;
    this.artistas.push(artista2);


    const artista3 = new Artista();
    artista3.id = 3;
    artista3.nombre = "Coldplay";
    artista3.biografia = "Coldplay es una banda de rock alternativo británica formada en Londres en 1996. Está compuesta por el vocalista Chris Martin, el guitarrista Jonny Buckland, el bajista Guy Berryman y el baterista Will Champion.";
    artista3.pais = "Reino Unido";
    artista3.generoMusical = ["Rock alternativo", "Pop rock"];
    artista3.oyentesMensuales = 800000;
    artista3.tipo = "Banda";
    artista3.verificado = true;
    this.artistas.push(artista3);


    const artista4 = new Artista();
    artista4.id = 4;
    artista4.nombre = "Adele";
    artista4.biografia = "Adele Laurie Blue Adkins, conocida profesionalmente como Adele, es una cantante y compositora británica. Es reconocida por su poderosa voz y sus emotivas baladas.";
    artista4.pais = "Reino Unido";
    artista4.generoMusical = ["Pop", "Soul"];
    artista4.oyentesMensuales = 600000;
    artista4.tipo = "Solista";
    artista4.verificado = true;
    this.artistas.push(artista4);
  }


  getHello(): string {
    return 'Hello World!';
  }


  getArtistas(): Artista[] {
    return this.artistas;
  }


  getCanciones(): Cancion[] {
    return this.canciones;
  }

}
