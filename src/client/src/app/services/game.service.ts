import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Game } from '../../../../shared/models/game.model';
import { addGame } from '../store/actions/game/game.actions';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private api: ApiService) {}

    getGames(){
      return this.api.get<{data: Game[]}>('games').pipe(map((res) => res.data))
    };

    addGame(game: Game){
      return this.api.post<{data:Game}>('create-game', game).pipe(map((res) => res.data))
    };
}
