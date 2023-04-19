

export enum AirwaysActionsEnum {
  enterMain = '[Enter main Page] Enter',
  enterBooking = '[Enter booking Page] Enter',
  currency = '[Select currency] Currency',
}

export interface User {
  email: string
  firstName: string
  lastName: string
  birthday: string
  sex: 'male' | 'female'
  country: string
  phoneNumber: string
  document: string
}

export interface UserOrder {}

export type CurrencyType = 'EUR' | 'USA' | 'RUB' | 'PLN';
export interface AirwaysState {
  user: User | null;
  order: UserOrder | null;
  currency: CurrencyType
}

export const initialState: AirwaysState = {
  user: null,
  order: null,
  currency: 'EUR',
};
