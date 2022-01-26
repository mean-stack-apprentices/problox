import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddGameComponent } from './components/add-game/add-game.component';
import { RoutingModule } from './routing.module';
import * as fromGame from 'src/app/modules/games/store/game.reducer';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GameEffects } from 'src/app/modules/games/store/game.effects';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar'




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
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    CurrencyMaskModule,
    MatSnackBarModule,


  ]
})
export class GamesModule { }
