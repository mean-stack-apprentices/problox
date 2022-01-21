import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromUser from './store/reducers/user/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user/user.effects';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { PageJoinGameComponent } from './pages/page-join-game/page-join-game.component';
import { LoginComponent } from './components/login/login.component';
import { PageGamesComponent } from './pages/page-games/page-games.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateMerchComponent } from './components/create-merch/create-merch.component';
import { ChatComponent } from './components/chat/chat.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import * as fromMerch from './store/reducers/merch/merch.reducer';
import { MerchEffects } from './store/effects/merch/merch.effects';
import { FaModule } from './modules/fa/fa.module';
import { MerchComponent } from './components/merch/merch.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const config: SocketIoConfig = { url: !environment.production ? 'http://localhost:3000/' : '', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    PageJoinGameComponent,
    LoginComponent,
    RegisterComponent,
    CreateMerchComponent,
    ChatComponent,
    ContactPageComponent,
    PageGamesComponent,
    NavbarComponent,
    MerchComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forRoot([UserEffects]),
    SocketIoModule.forRoot(config),
    EffectsModule.forRoot([UserEffects, MerchEffects]),
    StoreModule.forFeature(fromMerch.merchFeatureKey, fromMerch.reducer),
    FaModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
