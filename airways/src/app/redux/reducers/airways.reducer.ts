import { createReducer, on } from '@ngrx/store';
import { enterMain, enterBooking, selectCurrency, selectTypeOfDate, search, enterAuth, login, register, loginWithSocial } from '../actions/airways.action';
import { initialState } from '../state.model';


export const airwaysReducer = createReducer(
  initialState,
  on(enterMain, (state) => ({
    ...state,
    searchOrder: null,
  })),

  on(selectCurrency, (state, action) => ({
    ...state,
    currency: action.currency
  })),

  on(selectTypeOfDate, (state, action) => ({
    ...state,
    typeOfDate: action.typeOfDate
  })),

  on(search, (state, action) => ({
    ...state,
    searchOrder: action.searchResult
  })),

  on(enterAuth, (state) => ({
    ...state,
    user: null
  })),

  on(login, (state, action) => ({
    ...state,
    user: action.user
  })),

  on(register, (state, action) => ({
    ...state,
    user: action.user
  })),

  on(loginWithSocial, (state, action) => ({
    ...state,
    user: {...action.user, id: 'loginWithSocial'}
  })),
);
