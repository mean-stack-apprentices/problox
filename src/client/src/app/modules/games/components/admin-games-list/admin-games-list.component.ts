import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadGames } from '../../store/game.actions';
import { gamesSelector } from '../../store/game.selectors';
import { Game } from '../../../../../../../shared/models/game.model';
import { MatDialog } from '@angular/material/dialog';
import { EditGameComponent } from '../edit-game/edit-game.component';


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

  constructor(private store: Store, public matDialog: MatDialog) {
    this.store.dispatch(loadGames())
    this.games$ = this.store.select(gamesSelector)
  }

  ngOnInit(): void {
  }

  openDialog(): void{
    let dialogBox = this.matDialog.open(EditGameComponent, {
      width: "50rem",
      height: "50rem",
    })
  }

}
