import { createReducer, on } from '@ngrx/store';
import { enterMain, enterBooking, selectCurrencyAction, selectTypeOfDateAction, searchAction, enterAuth, loginAction, registerAction, loginWithSocialAction } from '../actions/airways.action';
import { initialState } from '../state.model';


export const airwaysReducer = createReducer(
  initialState,
  on(enterMain, (state) => ({
    ...state,
    searchOrder: null,
  })),

  on(selectCurrencyAction, (state, action) => ({
    ...state,
    currency: action.currency
  })),

  on(selectTypeOfDateAction, (state, action) => ({
    ...state,
    typeOfDate: action.typeOfDate
  })),

  on(searchAction, (state, action) => ({
    ...state,
    searchOrder: action.searchResult
  })),

  on(enterAuth, (state) => ({
    ...state,
    user: null
  })),

  on(loginAction, (state, action) => ({
    ...state,
    user: action.user
  })),

  on(registerAction, (state, action) => ({
    ...state,
    user: action.user
  })),

  on(loginWithSocialAction, (state, action) => ({
    ...state,
    user: {...action.user, id: 'loginWithSocial'}
  })),
);
