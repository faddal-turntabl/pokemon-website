import { Component } from '@angular/core';
import { Pokemon } from './model/pokemon.model';
import { RemotePokemonInformationService } from 'src/app/services/remote-pokemon-information.service';
import { sequenceEqual } from 'rxjs';

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
  public hp:Number = 0;
  public attack:Number = 0;
  public defence:Number = 0;

  ngOnInit() {
    //this.remotePokemonInformation.getPokemonData(this.name).subscribe(data => console.log(data))
    //console.log(this.pokemonData);
  }

  pokemonHp = 0;
  pokemonAttack = 0;
  pokemonDefence = 0;

  
  pokemonHp2 = 0;
  pokemonAttack2 = 0;
  pokemonDefence2 = 0;
  

  displayPokemonStats(searchedName:string, searchNumber:Number): void {
    this.name = searchedName;
    
    this.remotePokemonInformation.getPokemonData(this.name).subscribe(data => {
      
        if (searchNumber == 1) {
          this.pokemonHp = data.stats[0].base_stat;
          this.pokemonAttack = data.stats[1].base_stat;
          this.pokemonDefence = data.stats[2].base_stat;
          this.hp = this.pokemonHp;
          this.attack = this.pokemonAttack;
          this.defence = this.pokemonDefence;
        }
        else {
          this.pokemonHp2 = data.stats[0].base_stat;
          this.pokemonAttack2 = data.stats[1].base_stat;
          this.pokemonDefence2 = data.stats[2].base_stat;
          this.hp = this.pokemonHp2;
          this.attack = this.pokemonAttack2;
          this.defence = this.pokemonDefence2;
        }
    });
    //console.log("Health: " + this.pokemonHp);
    
  }


}

