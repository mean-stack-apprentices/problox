import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadGames } from '../../store/game.actions';
import { Game } from '../../../../../../../shared/models/game.model'
import { Observable } from 'rxjs';
import { gamesSelector } from '../../store/game.selectors';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-users-games-list',
  templateUrl: './users-games-list.component.html',
  styleUrls: ['./users-games-list.component.scss']
})
export class UsersGamesListComponent implements OnInit {

  games$: Observable<Game[]>;
  constructor(private store: Store<AppState>, ) {
    this.store.dispatch(loadGames())
    this.games$ = this.store.select(gamesSelector)

   }

  ngOnInit(): void {

  }

}
