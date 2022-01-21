import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddGameComponent } from './components/add-game/add-game.component';
import { RoutingModule } from './routing.module';
// import { gameFeatureKey, reducer } from 'src/app/modules/games/store/game.reducer';
import * as fromGame from 'src/app/modules/games/store/game.reducer';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GameEffects } from 'src/app/modules/games/store/game.effects';



@NgModule({
  declarations: [
    AddGameComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    EffectsModule.forFeature([GameEffects]),
    StoreModule.forFeature(fromGame.gameFeatureKey, fromGame.reducer),
  ]
})
export class GamesModule { }
