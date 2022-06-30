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
  public image:any = "https://paintingvalley.com/sketches/spartan-helmet-sketch-1.png";

  public name2 = "";
  public hp2:Number = 0;
  public attack2:Number = 0;
  public defence2:Number = 0;
  public image2:any = "https://paintingvalley.com/sketches/spartan-helmet-sketch-1.png";

  ngOnInit() {
    //this.remotePokemonInformation.getPokemonData(this.name).subscribe(data => console.log(data))
    //console.log(this.pokemonData);
  }

  pokemonName = "";
  pokemonHp = 0;
  pokemonAttack = 0;
  pokemonDefence = 0;
  pokemonImage = "https://paintingvalley.com/sketches/spartan-helmet-sketch-1.png";

  pokemonName2 = "";
  pokemonHp2 = 0;
  pokemonAttack2 = 0;
  pokemonDefence2 = 0;
  pokemonImage2 = "https://paintingvalley.com/sketches/spartan-helmet-sketch-1.png";

  selectFighters = [false,false];
  

  displayPokemonStats(searchedName:string, searchNumber:Number): void {
    
    this.remotePokemonInformation.getPokemonData(searchedName).subscribe(data => {
      
        if (searchNumber == 1) {
          this.pokemonHp = data.stats[0].base_stat;
          this.pokemonAttack = data.stats[1].base_stat;
          this.pokemonDefence = data.stats[2].base_stat;
          this.pokemonName = data.name;
          this.pokemonImage = data.sprites.front_default;

          this.name = this.pokemonName;
          this.hp = this.pokemonHp;
          this.attack = this.pokemonAttack;
          this.defence = this.pokemonDefence;
          this.image = this.pokemonImage;
          this.selectFighters[0] = true

        }
        else {
          this.pokemonHp2 = data.stats[0].base_stat;
          this.pokemonAttack2 = data.stats[1].base_stat;
          this.pokemonDefence2 = data.stats[2].base_stat;
          this.pokemonName2 = data.name;
          this.pokemonImage2 = data.sprites.front_default;

          this.name2 = this.pokemonName2;
          this.hp2 = this.pokemonHp2;
          this.attack2 = this.pokemonAttack2;
          this.defence2 = this.pokemonDefence2;
          this.image2 = this.pokemonImage2;
          this.selectFighters[1] = true

        }
    });
    //console.log("Health: " + this.pokemonHp);
    
  }

  
  determineWinner() {

    if (!this.selectFighters[0] || !this.selectFighters[1]) {
      alert("No pokemon selected");
      return;
    }

    let winner = "";
    
    // if ((healthPikachu * defencePikachu) / attackCharizard < (healthCharizard * defenceCharizard) / attackPikachu) {
    //   then Charizard wins
    // }
    // else if ((healthPikachu * defencePikachu) / attackCharizard > (healthCharizard * defenceCharizard) / attackPikachu) {
    //   then Pikachu wins
    // }
    // else Draw
    

    if ((this.pokemonHp * this.pokemonDefence) / this.pokemonAttack2 < (this.pokemonHp2 * this.pokemonDefence2) / this.pokemonAttack2) {
      winner = this.pokemonName2 + " wins";
    }
    else if ((this.pokemonHp * this.pokemonDefence) / this.pokemonAttack2 > (this.pokemonHp2 * this.pokemonDefence2) / this.pokemonAttack2) {
      winner = this.pokemonName + " wins";
    }
    else winner = "Draw";
    console.log(winner);
  }
  

  

}

