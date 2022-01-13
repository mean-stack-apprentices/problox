import { ContactPageComponent } from './components/contact-page/contact-page.component'
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageCreateGameComponent } from './pages/page-create-game/page-create-game.component';
import { PageGamesComponent } from './pages/page-games/page-games.component';
import { PageJoinGameComponent } from './pages/page-join-game/page-join-game.component';
import { CreateMerchComponent } from './components/create-merch/create-merch.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'games', component: PageGamesComponent},
  {path: 'join-game', component: PageJoinGameComponent},
  {path: 'create-game', component: PageCreateGameComponent},
  {path: 'create-message', component:ChatComponent},
  {path:'contact-page', component:ContactPageComponent},
  {path: 'create-merch', component: CreateMerchComponent},
  {path: '**', redirectTo: '/join-game'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
