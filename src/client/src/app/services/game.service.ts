import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Game } from '../../../../shared/models/game.model';
import { addGame } from '../modules/games/store/game.actions';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
   routeString = 'games/'
  constructor(private api: ApiService) {}

    getGames(){
      return this.api.get<{data: Game[]}>(this.routeString).pipe(map((res) => res.data))
    };

    addGame(game: Game){
      return this.api.post<{data:Game}>(`${this.routeString}create-game`, game).pipe(map((res) => res.data))
    };
}
