import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from '../components/add-game/add-game.component';
import { PageGamesComponent } from 'src/app/pages/page-games/page-games.component';

const routes: Routes = [
  {path: '', component: PageGamesComponent},
  {path: 'create-game', component: AddGameComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule { }
