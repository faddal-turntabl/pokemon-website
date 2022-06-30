import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Pokemon } from 'src/app/model/pokemon.model';
import { RemotePokemonInformationService } from 'src/app/services/remote-pokemon-information.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit {

  constructor(private remotePokemonInformation : RemotePokemonInformationService) {

  }

  @Input() public pokemonName: any;
  @Input() public pokemonHp: any;
  @Input() public pokemonAttack: any;
  @Input() public pokemonDefence: any;

  @Input() public pokemonName2: any;
  @Input() public pokemonHp2: any;
  @Input() public pokemonAttack2: any;
  @Input() public pokemonDefence2: any;

  
  public searchEvent = new EventEmitter();
  public pokemonInfo:Pokemon[] = [];

  ngOnInit(): void {
    //this.remotePokemonInformation.getPokemonData("pikachu").subscribe(data => console.log(data));
    //console.log(this.pokemonInfo);
  }

  getSearchedPokeData() {
    this.remotePokemonInformation.getPokemonData(this.pokemonName).subscribe(data => this.pokemonInfo = data);
  }

}
