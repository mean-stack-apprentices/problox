import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { GameService } from 'src/app/services/game.service';
import * as gameAction from './game.actions';

@Injectable()
export class GameEffects {
  loadGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(gameAction.loadGames),
      mergeMap(() =>
        this.gameService.getGames().pipe(
          map((data) => gameAction.loadGamesSuccess({ data })),
          catchError((error) => of(gameAction.loadGamesFailure({ error })))
        )
      )
    )
  );

  addGame$ = createEffect(() =>
  this.actions$.pipe(
    ofType(gameAction.addGame),
    mergeMap((action) =>
      this.gameService.addGame(action.data).pipe(
        map((data) => gameAction.addGameSuccess({ data })),
        catchError((error) => of(gameAction.addGameFailure({ error })))
      )
    )
  )
);
  constructor(private actions$: Actions, private gameService: GameService) {}
}
