import { createReducer, on } from '@ngrx/store';
import { enterMain, enterBooking, selectCurrency } from '../actions/airways.action';
import { initialState } from '../state.model';


export const airwaysReducer = createReducer(
  initialState,
  on(enterMain, (state) => ({
    ...state,
    order: null
  })),

  on(selectCurrency, (state, action) => ({
    ...state,
    currency: action.currency
  })),
);
