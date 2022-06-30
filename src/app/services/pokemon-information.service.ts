import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon.model';

@Injectable({
  providedIn: 'root'
})

export class PokemonInformationService {

  constructor() { }

  getPokemon() {
    let pokemons:Pokemon[] = [
      {name: "Charizard", attack: 84, defence: 78,  HP: 78},
      {name: "Pikachu", attack: 55, defence: 40, HP: 35}, 
      {name: "Pidgeot", attack: 80, defence: 75,  HP: 83},
      {name: "Machamp", attack: 130, defence: 80,  HP: 90},
    ]
    return pokemons;
  }

  
  
}
