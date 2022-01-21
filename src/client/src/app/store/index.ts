import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './reducers/user/user.reducer';
import * as fromGame from '../modules/games/store/game.reducer';


export interface AppState {

  [fromUser.userFeatureKey]: fromUser.State;
  [fromGame.gameFeatureKey]: fromGame.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromUser.userFeatureKey]: fromUser.reducer,
  [fromGame.gameFeatureKey]: fromGame.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
