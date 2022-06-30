import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../model/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class RemotePokemonInformationService {

  constructor(private http: HttpClient) {}

  private pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/";

  getPokemonData(pokemonName:string) {
    let pokemonData = this.http.get<any>(this.buildURL(pokemonName));
    console.log(pokemonData);
    return pokemonData;
  }

  buildURL(pokemonName:string):string {
    let url = this.pokeApiUrl + pokemonName;
    return url;
  }


}
