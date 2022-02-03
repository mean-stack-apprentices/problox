import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as fromUser from './reducers/user/user.reducer';
import * as fromMerch from './reducers/merch/merch.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';


export interface AppState {

  router: RouterReducerState;
  [fromUser.userFeatureKey]: fromUser.State;
  [fromMerch.merchFeatureKey]: fromMerch.State;

}

export const reducers: ActionReducerMap<AppState> = {

  router: routerReducer,
  [fromUser.userFeatureKey]: fromUser.reducer,
  [fromMerch.merchFeatureKey]: fromMerch.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
