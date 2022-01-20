import { createFeatureSelector, createSelector } from '@ngrx/store';
import {AppState} from '../..';
import * as fromGame from '../../reducers/game/game.reducer';

const gameFeatureSelector = createFeatureSelector<AppState, fromGame.State>(fromGame.gameFeatureKey)

export const gamesSelector = createSelector(
  gameFeatureSelector,
  (state) => state.games
);

