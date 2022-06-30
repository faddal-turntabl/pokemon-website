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
  
  public searchEvent = new EventEmitter();
  public pokemonInfo:Pokemon[] = [];

  ngOnInit(): void {
    this.remotePokemonInformation.getPokemonData("pikachu").subscribe(data => this.pokemonInfo = data);
    
    
    //console.log(this.pokemonInfo);
  }

}
