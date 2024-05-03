import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private urlPokemon: string = "https://pokeapi.co/api/v2/pokemon";
  private url: string = "https://pokeapi.co/api/v2/pokemon-species";
  

  constructor(private http : HttpClient) { }

  getPokemonPhoto(name : string){
    return this.http.get(`${this.urlPokemon}/${name}`); // es lo mismo que esto: this.http.get(this.url + name)
  }getPokemonDescription(name : string){
    return this.http.get(`${this.url}/${name}`); // es lo mismo que esto: this.http.get(this.url + name)
  }

  getpokemon(id : number){
    return this.http.get(`${this.urlPokemon}/${id}`);
  }

  


}
