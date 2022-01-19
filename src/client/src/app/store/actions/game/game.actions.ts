import { createAction, props } from '@ngrx/store';
import { Game } from '../../../../../../shared/models/game.model';

export const loadGames = createAction(
  '[Game] Load Games'
);

export const loadGamesSuccess = createAction(
  '[Game] Load Games Success',
  props<{ data: any }>()
);

export const loadGamesFailure = createAction(
  '[Game] Load Games Failure',
  props<{ error: Error }>()
);

export const addGame = createAction(
'[Game] Add Game',
props<{data: Game}>()
);

export const addGameSuccess = createAction(
  '[Game] Add Game Success',
  props<{data: Game}>()
);

export const addGameFailure = createAction(
  '[Game] Add Game Failure',
  props<{error: Error }>()
);
