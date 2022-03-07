import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './components/add-game/add-game.component';
import { PageGamesComponent } from 'src/app/pages/page-games/page-games.component';
import { UsersGamesListComponent } from './components/users-games-list/users-games-list.component';
import { UserGameDetailsComponent } from './components/user-game-details/user-game-details.component';
import { RolesGuard } from 'src/app/guards/roles.guard';
import { GameDetailsResolver } from './gamedetails.resolver';
import { AdminGamesListComponent } from './components/admin-games-list/admin-games-list.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';

const routes: Routes = [
  {path: '', component: PageGamesComponent},
  {path: 'users-games-list', component: UsersGamesListComponent},
  {path: 'admin-games-list', component: AdminGamesListComponent},
  {path: 'create-game', component: AddGameComponent,
    canActivate: [RolesGuard], data:{roles:["ADMIN"]}},
  {path: 'game-details/:id', component: UserGameDetailsComponent,
    resolve: {GameDetailsResolver}},
  {path: 'edit', component: EditGameComponent},
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule { }
