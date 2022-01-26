import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './components/add-game/add-game.component';
import { PageGamesComponent } from 'src/app/pages/page-games/page-games.component';
import { UsersGamesListComponent } from './components/users-games-list/users-games-list.component';
import { UserGameDetailsComponent } from './components/user-game-details/user-game-details.component';

const routes: Routes = [
  {path: '', component: PageGamesComponent},
  {path: 'users-games-list', component: UsersGamesListComponent},
  {path: 'create-game', component: AddGameComponent},
  {path: 'game-details', component: UserGameDetailsComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule { }
