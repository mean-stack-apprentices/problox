import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMerch from '../../reducers/merch/merch.reducer';

const merchFeatureSelector = createFeatureSelector<fromMerch.State>(fromMerch.merchFeatureKey);

export const merchSelector = createSelector(
    merchFeatureSelector, (state) => state.merches 
);

export const msgSelector = createSelector(
    merchFeatureSelector, (state) => state.msg
);

export const errorMsgSelector = createSelector(
    merchFeatureSelector, (state) => state.errorMsg
)

