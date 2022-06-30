import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Pokemon } from '../model/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class RemotePokemonInformationService {

  constructor(private http: HttpClient) {}

  private pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/";

  getPokemonData(pokemonName:string) {
    let pokemonData = this.http.get<any>(this.buildURL(pokemonName)).pipe(catchError(this.handleError));
    console.log(pokemonData);
    return pokemonData;
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    alert("Choose a valid pokemon!");
    throw new Error("Choose a valid pokemon!");
  }

  buildURL(pokemonName:string):string {
    let url = this.pokeApiUrl + pokemonName;
    return url;
  }


}
