import { createFeatureSelector, createSelector } from '@ngrx/store';
import {AppState} from '../../../store';
import * as fromGame from './game.reducer';

const gameFeatureSelector = createFeatureSelector<fromGame.State>(fromGame.gameFeatureKey)

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = fromGame.adapter.getSelectors();

export const gamesSelector = createSelector(
  gameFeatureSelector,
  selectAll
);
