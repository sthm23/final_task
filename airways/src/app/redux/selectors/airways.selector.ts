import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AirwaysState } from '../state.model';


export const selectSharedCardsState = createFeatureSelector<AirwaysState>('airwaysState');

export const selectCurrency = createSelector(
  selectSharedCardsState,
  (state: AirwaysState) => state.currency
)

export const selectDate = createSelector(
  selectSharedCardsState,
  (state: AirwaysState) => state.typeOfDate
)

export const selectUser = createSelector(
  selectSharedCardsState,
  (state: AirwaysState) => state.user
)

export const selectSearchOrder = createSelector(
  selectSharedCardsState,
  (state: AirwaysState) => state.searchOrder
)
