import { createAction, props } from '@ngrx/store';
import { AirwaysActionsEnum, CurrencyType } from '../state.model';

export const enterMain = createAction(AirwaysActionsEnum.enterMain);
export const enterBooking = createAction(AirwaysActionsEnum.enterBooking);

export const selectCurrency = createAction(
  AirwaysActionsEnum.currency,
  props<{ currency: CurrencyType }>(),
);
