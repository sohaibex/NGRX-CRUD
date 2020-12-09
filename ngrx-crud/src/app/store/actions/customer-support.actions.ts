import { createAction, props } from '@ngrx/store';
import { CustomerMessage } from 'src/app/shared/customer-message';

export const loadCustomerSupports = createAction(
  '[CustomerSupport] Load CustomerSupports'
);

export const loadCustomerSupportsSuccess = createAction(
  '[CustomerSupport] Load CustomerSupports Success',
  props<{ data: any }>()
);

export const loadCustomerSupportsFailure = createAction(
  '[CustomerSupport] Load CustomerSupports Failure',
  props<{ error: any }>()
);

export const sendingCustomerSupportMessage = createAction(
  '[Customer Support Component] Sending Customer Support Message',
  props<{ data: CustomerMessage }>()
);
