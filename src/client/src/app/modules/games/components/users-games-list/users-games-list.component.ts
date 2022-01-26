import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-users-games-list',
  templateUrl: './users-games-list.component.html',
  styleUrls: ['./users-games-list.component.scss']
})
export class UsersGamesListComponent implements OnInit {

  constructor(private gamesService: GameService, private store: Store, ) { }

  ngOnInit(): void {
  }

}
