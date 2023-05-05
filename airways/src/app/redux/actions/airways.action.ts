import { createAction, props } from '@ngrx/store';
import { AirwaysActionsEnum, CurrencyType, DateType, User, UserOrder } from '../state.model';

export const enterMain = createAction(AirwaysActionsEnum.enterMain);
export const enterBooking = createAction(AirwaysActionsEnum.enterBooking);
export const enterShop = createAction(AirwaysActionsEnum.enterShop);
export const enterAuth = createAction(AirwaysActionsEnum.enterAuth);

export const selectCurrencyAction = createAction(
  AirwaysActionsEnum.currency,
  props<{ currency: CurrencyType }>(),
);

export const selectTypeOfDateAction = createAction(
  AirwaysActionsEnum.dateType,
  props<{ typeOfDate: DateType }>(),
);

export const loginAction = createAction(
  AirwaysActionsEnum.login,
  props<{ user: User }>(),
);

export const registerAction = createAction(
  AirwaysActionsEnum.register,
  props<{ user: User }>(),
);

export const loginWithSocialAction = createAction(
  AirwaysActionsEnum.loginWithSocial,
  props<{ user: Omit<User, 'id'> }>(),
);

export const searchAction = createAction(
  AirwaysActionsEnum.search,
  props<{ searchResult: UserOrder }>(),
);
