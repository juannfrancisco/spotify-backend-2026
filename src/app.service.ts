import { Injectable } from '@nestjs/common';
import { Artista } from './models/artista.model';

@Injectable()
export class AppService {

  private artistas:Artista[] = [];


  constructor() {
    this.inicializarArtistas();
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

}
