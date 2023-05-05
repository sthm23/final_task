import { FormArray, FormControl, FormGroup } from "@angular/forms";

export type TypeOfPassengersName = 'Adults' | 'Child' | 'Infant';

export type CurrencyType = 'EUR' | 'USA' | 'RUB' | 'PLN';

export interface DropDownOptions {
  name: TypeOfPassengersName,
  count: number
}

export interface SearchFormGroup {
  from: FormControl
  destination: FormControl
  date: FormControl<string | null>
  passengers: FormArray<FormControl<DropDownOptions | null>>
  rangeDate: FormGroup<{
    start: FormControl<Date | null>;
    end: FormControl<Date | null>;
  }>
}

export interface Country {
  name: string
  code: string,
  capital: string,
  region: string,
  currency: {
      code: string,
      name: string,
      symbol: string
  },
  language: {
      code: string,
      name: string
  },
  flag: string
  dialling_code: string,
  isoCode: string
}

export type RegisterCountryType = Pick<Country, 'name' | 'isoCode'> & {code:string}

export interface Airport {
  id: number
  country: string
  code: string
  name: string
  city: string
  state: string
}

/*auth interfaces*/

export interface User {
  id: string,
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

export type GenderType = 'male' | 'female';

export type CreateUser = Omit<User, 'id' | 'createDate'>;

export type LoginObj = {
  username: string
  password: string
};

export interface LoginResult {
  user: User
  accessToken: string
  refreshToken: string
}

export interface LoginWithSocial {
  user: Omit<User, 'id'>
  accessToken: string
  refreshToken: string
}

type ModalType = 'login' | 'facebook' | 'google'
export interface AuthModalResult {
  result: LoginWithSocial | LoginResult
  type: ModalType
}
