import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './components/add-game/add-game.component';
import { PageGamesComponent } from 'src/app/pages/page-games/page-games.component';
import { UsersGamesListComponent } from './components/users-games-list/users-games-list.component';
import { UserGameDetailsComponent } from './components/user-game-details/user-game-details.component';
import { RolesGuard } from 'src/app/guards/roles.guard';
import { GameDetailsResolver } from './gamedetails.resolver';

const routes: Routes = [
  {path: '', component: PageGamesComponent},
  {path: 'users-games-list', component: UsersGamesListComponent},
  {path: 'create-game', component: AddGameComponent,
    canActivate: [RolesGuard], data:{roles:["ADMIN"]}},
  {path: 'game-details/:id', component: UserGameDetailsComponent,
    resolve: {GameDetailsResolver}},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule { }
