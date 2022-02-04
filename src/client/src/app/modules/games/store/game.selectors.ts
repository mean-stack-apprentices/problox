import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouteParams } from 'src/app/store/selectors/router/router.selector';
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

export const selectedGameEntity = createSelector(
  gameFeatureSelector,
  selectEntities
);

export const selectedGameSelector = createSelector(
  selectedGameEntity,
  selectRouteParams,
  (entity, route) => entity[route.id]
);
