import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageCreateGameComponent } from './pages/page-create-game/page-create-game.component';
import { PageJoinGameComponent } from './pages/page-join-game/page-join-game.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'join-game', component: PageJoinGameComponent},
  {path: 'create-game', component: PageCreateGameComponent},
  {path: '**', redirectTo: '/join-game'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
