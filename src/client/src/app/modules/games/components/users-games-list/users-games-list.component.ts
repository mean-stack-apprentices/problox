import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { Game } from '../../../../../../../shared/models/game.model';
import { loadGames } from '../../store/game.actions';
import { gamesSelector } from '../../store/game.selectors';

@Component({
  selector: 'app-users-games-list',
  templateUrl: './users-games-list.component.html',
  styleUrls: ['./users-games-list.component.scss']
})
export class UsersGamesListComponent implements OnInit {

  games$: Observable<Game[]>
  constructor( private store: Store<AppState>, private router: Router ) {
    this.store.dispatch(loadGames())
    this.games$ = this.store.select(gamesSelector)
   }

  ngOnInit(): void {
  }

  fetchGameDetails(gameId: string){
    this.router.navigate(['games/game-details/', gameId])
  }

}
