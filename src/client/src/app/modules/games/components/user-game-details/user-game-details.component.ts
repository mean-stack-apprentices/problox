import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectedGameSelector } from '../../store/game.selectors'

@Component({
  selector: 'app-user-game-details',
  templateUrl: './user-game-details.component.html',
  styleUrls: ['./user-game-details.component.scss']
})
export class UserGameDetailsComponent implements OnInit {

  gameId: string ="";
  selectedGame$ = this.store.pipe(select(selectedGameSelector))

  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gameId = params['gameId']
    })
  }

}
