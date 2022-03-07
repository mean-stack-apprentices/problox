import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadGames } from '../../store/game.actions';
import { gamesSelector } from '../../store/game.selectors';
import { Game } from '../../../../../../../shared/models/game.model';


@Component({
  selector: 'app-admin-games-list',
  templateUrl: './admin-games-list.component.html',
  styleUrls: ['./admin-games-list.component.scss']
})
export class AdminGamesListComponent implements OnInit {

  games$: Observable<Game[]>
  columnsDisplay = [
    "imgUrl", "name","description", "price", "tier", "status", "update"
  ]

  constructor(private store: Store) {
    this.store.dispatch(loadGames())
    this.games$ = this.store.select(gamesSelector)
  }

  ngOnInit(): void {
  }

}
