import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Game } from '../../../../../../shared/models/game.model';
import * as gameAction from './game.actions';


export const gameFeatureKey = 'game';

export interface State extends EntityState<Game>{
  selectedGame: string | null;

}

export function selectGameId(a: Game): string {
  return `${a._id}`;

}

export const adapter: EntityAdapter<Game> = createEntityAdapter<Game>({
  selectId: selectGameId,

});

export const initialState: State = adapter.getInitialState( {
  selectedGame: null,

});


export const reducer = createReducer(
  initialState,

  on(gameAction.loadGamesSuccess, (state, action) => {
    console.log(action)
    return adapter.setAll(action.data, state)
  }),

  on(gameAction.addGameSuccess, (state , action) => {
    return adapter.addOne(action.data, state)
  }),

);

