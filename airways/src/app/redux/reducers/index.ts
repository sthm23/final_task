import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AirwaysState } from '../state.model';
import { airwaysReducer } from './airways.reducer';

export interface State {
  airwaysState: AirwaysState
}

export const reducers: ActionReducerMap<State> = {
  airwaysState: airwaysReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
