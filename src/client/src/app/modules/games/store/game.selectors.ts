import { createFeatureSelector, createSelector } from '@ngrx/store';
import {AppState} from '../../../store';
import * as fromGame from './game.reducer';

const gameFeatureSelector = createFeatureSelector<AppState, fromGame.State>(fromGame.gameFeatureKey)

export const gamesSelector = createSelector(
  gameFeatureSelector,
  (state) => state.games
);


