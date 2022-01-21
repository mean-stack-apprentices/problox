import { createAction, props } from '@ngrx/store';
import {Merch} from '../../../../../../shared/models/merch.model'

export const createMerch = createAction(
  '[Merch] Create Merch',
  props<{data: Merch}>()
);

export const createMerchSuccess = createAction(
  '[Merch] Create Merch Success',
  props<{ data: Merch }>()
);

export const createMerchFailure = createAction(
  '[Merch] Create Merch Failure',
  props<{ error: Error }>()
);

export const loadMerchs = createAction(
  '[Merch] Load Merchs'
);

export const loadMerchsSuccess = createAction(
  '[Merch] Load Merchs Success',
  props<{ data: any }>()
);

export const loadMerchsFailure = createAction(
  '[Merch] Load Merchs Failure',
  props<{ error: any }>()
);
