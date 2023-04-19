import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AirwaysState } from '../state.model';


export const selectSharedCardsState = createFeatureSelector<AirwaysState>('airwaysState');
