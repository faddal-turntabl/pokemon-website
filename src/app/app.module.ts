import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { StatsMeterComponent } from './components/stats-meter/stats-meter.component';
import { OpponentsComponent } from './components/opponents/opponents.component';
import { PokemonInformationService } from './services/pokemon-information.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    StatsMeterComponent,
    OpponentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PokemonInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
