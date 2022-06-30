import { Component } from '@angular/core';
import { Pokemon } from './model/pokemon.model';
import { RemotePokemonInformationService } from 'src/app/services/remote-pokemon-information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  constructor(private remotePokemonInformation: RemotePokemonInformationService) {

  }

  pokemonData:Pokemon[] = [];

  public name = "";

  ngOnInit() {
    //this.remotePokemonInformation.getPokemonData(this.name).subscribe(data => console.log(data))
    //console.log(this.pokemonData);
  }

  displayPokemonStats(searchedName:string): void {
    this.name = searchedName;
    this.remotePokemonInformation.getPokemonData(this.name).subscribe(data => console.log(data))
  }


}

