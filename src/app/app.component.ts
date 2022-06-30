import { Component } from '@angular/core';
import { Pokemon } from './model/pokemon.model';
import { PokemonInformationService } from './services/pokemon-information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  constructor(private PokemonInformation: PokemonInformationService) {

  }

  pokemonData:Pokemon[] = [];

  ngOnInit() {
    this.pokemonData = this.PokemonInformation.getPokemon();
    console.log(this.pokemonData);
  }

  displayPokemonStats(searchedName:string): void {
    let pokemon = this.pokemonData.filter(p => p.name.toLowerCase() === searchedName.toLowerCase());
    console.log(pokemon[0]);
  }
 
  title = 'pokemon-website';


}

