import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { PageCreateGameComponent } from './pages/page-create-game/page-create-game.component';
import { PageJoinGameComponent } from './pages/page-join-game/page-join-game.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'join-game', component: PageJoinGameComponent},
  {path: 'create-game', component: PageCreateGameComponent},
  {path: 'create-message', component:ChatComponent},
  {path: '**', redirectTo: '/join-game'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
