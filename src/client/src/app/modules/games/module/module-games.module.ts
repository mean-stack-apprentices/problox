import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddGameComponent } from '../components/add-game/add-game.component';
import { RoutingModule } from './routing.module';



@NgModule({
  declarations: [
    AddGameComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
  ]
})
export class GamesModule { }
