import { createAction, props } from '@ngrx/store';
import { AirwaysActionsEnum, CurrencyType, DateType, User, UserOrder } from '../state.model';

export const enterMain = createAction(AirwaysActionsEnum.enterMain);
export const enterBooking = createAction(AirwaysActionsEnum.enterBooking);
export const enterShop = createAction(AirwaysActionsEnum.enterShop);
export const enterAuth = createAction(AirwaysActionsEnum.enterAuth);

export const selectCurrency = createAction(
  AirwaysActionsEnum.currency,
  props<{ currency: CurrencyType }>(),
);

export const selectTypeOfDate = createAction(
  AirwaysActionsEnum.dateType,
  props<{ typeOfDate: DateType }>(),
);

export const login = createAction(
  AirwaysActionsEnum.login,
  props<{ user: User }>(),
);

export const register = createAction(
  AirwaysActionsEnum.register,
  props<{ user: User }>(),
);

export const loginWithSocial = createAction(
  AirwaysActionsEnum.loginWithSocial,
  props<{ user: Omit<User, 'id'> }>(),
);

export const search = createAction(
  AirwaysActionsEnum.search,
  props<{ searchResult: UserOrder }>(),
);
