import { ContactPageComponent } from './components/contact-page/contact-page.component'
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageJoinGameComponent } from './pages/page-join-game/page-join-game.component';
import { CreateMerchComponent } from './components/create-merch/create-merch.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'join-game', component: PageJoinGameComponent},
  {path: 'create-message', component:ChatComponent},
  {path:'contact-page', component:ContactPageComponent},
  {path: 'create-merch', component: CreateMerchComponent},
  {path: 'games', loadChildren:
  () => import('./modules/games/module/module-games.module').then(m => m.GamesModule)
  },
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
