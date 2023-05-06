

export enum AirwaysActionsEnum {
  enterMain = '[Enter main Page] Enter',
  enterAuth = '[Enter auth modal] Enter',
  enterBooking = '[Enter booking Page] Enter',
  enterShop = '[Enter shop Page] Enter',
  currency = '[Select currency] Currency',
  dateType = '[Select type of date] TypeOfDate',
  login = '[User login] user',
  register = '[User register] user',
  loginWithSocial = '[Login with social] user',
  search = '[Search flight] search',
}


export type GenderType = 'male' | 'female';
export type CurrencyType = 'EUR' | 'USA' | 'RUB' | 'PLN';
export type TypeOfPassengersName = 'adults' | 'child' | 'infant';
export type DateType = 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY/DD/MM' | 'YYYY/MM/DD';


export interface User {
  id?: string,
  lastName: string,
  firstName: string,
  birthday: string,
  gender: GenderType,
  login: string,
  password: string,
  createDate: string,
  email: string,
  phoneNumber: string,
  country: string,
  citizenship: string
}

export type OrderType = {
  [key in TypeOfPassengersName]: number;
};


export interface UserOrder {
  from: string
  destination: string
  date?: Date
  rangeDate?: {
    start:Date,
    end:Date
  }
  passengers: OrderType;
}


export interface AirwaysState {
  user: User | null;
  searchOrder: UserOrder | null;
  currency: CurrencyType
  typeOfDate: DateType
}

export const initialState: AirwaysState = {
  currency: 'EUR',
  typeOfDate: 'MM/DD/YYYY',
  user: null,
  searchOrder: null,
};
