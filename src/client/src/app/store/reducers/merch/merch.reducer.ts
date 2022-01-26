import { createReducer, on } from '@ngrx/store';
import { Merch } from '../../../../../../shared/models/merch.model';
import { createMerchFailure, createMerchSuccess, loadMerchsSuccess, selectMerch } from '../../actions/merch/merch.actions';


export const merchFeatureKey = 'merch';

export interface State {
  merches: Merch[];
  errorMsg: Error | null;
  msg: String | null;
  selectedMerch: Merch | null;
}

export const initialState: State = {
  merches: [],
  errorMsg: null,
  msg: null,
  selectedMerch: null
};


export const reducer = createReducer(
  initialState,
  on(createMerchSuccess, (state,action) => {
    const merches = [...state.merches];
    merches.push(action.data);
    return {...state, merches, msg: "Merch Created Successfully!", errorMsg: null}
  }),
  on(createMerchFailure, (state, action) => {
    return {...state, errorMsg: action.error, msg: "Merch Creation Failure!!"}
  }),
  on(loadMerchsSuccess, (state, action) => {
    return {...state, merches: action.data}
  }),
  on(selectMerch, (state, action) => {
    return {...state, selectedMerch: action.data}
  })
);

