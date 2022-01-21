import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../..';
import * as fromMerch from '../../reducers/merch/merch.reducer';

const merchFeatureSelector = createFeatureSelector<AppState, fromMerch.State>(fromMerch.merchFeatureKey);

export const merchSelector = createSelector(
    merchFeatureSelector, (state) => state.merches 
);

