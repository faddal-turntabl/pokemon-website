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

  public name2 = "";
  public hp2:Number = 0;
  public attack2:Number = 0;
  public defence2:Number = 0;

  ngOnInit() {
    //this.remotePokemonInformation.getPokemonData(this.name).subscribe(data => console.log(data))
    //console.log(this.pokemonData);
  }

  pokemonName = "";
  pokemonHp = 5;
  pokemonAttack = 5;
  pokemonDefence = 5;

  pokemonName2 = "";
  pokemonHp2 = 5;
  pokemonAttack2 = 5;
  pokemonDefence2 = 5;
  

  displayPokemonStats(searchedName:string, searchNumber:Number): void {
    
    this.remotePokemonInformation.getPokemonData(searchedName).subscribe(data => {
      
        if (searchNumber == 1) {
          this.pokemonHp = data.stats[0].base_stat;
          this.pokemonAttack = data.stats[1].base_stat;
          this.pokemonDefence = data.stats[2].base_stat;
          this.name = searchedName;
          this.hp = this.pokemonHp;
          this.attack = this.pokemonAttack;
          this.defence = this.pokemonDefence;
        }
        else {
          this.pokemonHp2 = data.stats[0].base_stat;
          this.pokemonAttack2 = data.stats[1].base_stat;
          this.pokemonDefence2 = data.stats[2].base_stat;
          this.name2 = searchedName;
          this.hp2 = this.pokemonHp2;
          this.attack2 = this.pokemonAttack2;
          this.defence2 = this.pokemonDefence2;
        }
    });
    //console.log("Health: " + this.pokemonHp);
    
  }

  determineWinner() {
    let winner = "";
    /*
    if ((healthPikachu * defencePikachu) / attackCharizard < (healthCharizard * defenceCharizard) / attackPikachu) {
      then Charizard wins
    }
    else if ((healthPikachu * defencePikachu) / attackCharizard > (healthCharizard * defenceCharizard) / attackPikachu) {
      then Pikachu wins
    }
    else Draw
    */

    if ((this.pokemonHp * this.pokemonDefence) / this.pokemonAttack2 < (this.pokemonHp2 * this.pokemonDefence2) / this.pokemonAttack2) {
      winner = this.pokemonName2;
    }
    else if ((this.pokemonHp * this.pokemonDefence) / this.pokemonAttack2 > (this.pokemonHp2 * this.pokemonDefence2) / this.pokemonAttack2) {
      winner = this.pokemonName;
    }
    else winner = "Draw";
    console.log(winner);
  }


}

