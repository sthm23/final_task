import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AirwaysState } from '../state.model';


export const selectSharedCardsState = createFeatureSelector<AirwaysState>('airwaysState');

export const selectDates = (state: any) => state;

export const selectCurrencyState = createSelector(
  selectSharedCardsState,
  (state: AirwaysState) => state.currency
)

export const selectDateState = createSelector(
  selectSharedCardsState,
  (state: AirwaysState) => state.typeOfDate,
)

export const selectUser = createSelector(
  selectSharedCardsState,
  (state: AirwaysState) => state.user
)

export const selectSearchOrder = createSelector(
  selectSharedCardsState,
  (state: AirwaysState) => state.searchOrder
)



/* this is selector to components */
export const selectDate = createSelector(
  selectDateState,
  selectDates,
);

export const selectCurrency = createSelector(
  selectCurrencyState,
  selectDates,
);
