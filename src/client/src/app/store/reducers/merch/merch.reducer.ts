import { Action, createReducer, on } from '@ngrx/store';
import { Merch } from '../../../../../../shared/models/merch.model';
import { createMerchFailure, createMerchSuccess } from '../../actions/merch/merch.actions';


export const merchFeatureKey = 'merch';

export interface State {
  merches: Merch[];
  errorMsg: Error | null;
}

export const initialState: State = {
  merches: [],
  errorMsg: null
};


export const reducer = createReducer(
  initialState,
  on(createMerchSuccess, (state,action) => {
    const merches = [...state.merches];
    merches.push(action.data);
    return {...state, merches}
  }),
  on(createMerchFailure, (state, action) => {
    return {...state, errorMsg: action.error}
  })
);

