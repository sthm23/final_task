import { FormControl, FormGroup } from "@angular/forms";

export type TypeOfPassengersName = 'adults' | 'child' | 'infant';

export type CurrencyType = 'EUR' | 'USA' | 'RUB' | 'PLN';
/*35 country*/

const country_list = [
  'United Arab Emirates', 'United States', 'United Kingdom',
  'Brazil', 'Belgium', 'Belarus', 'Azerbaijan', 'Egypt',
  'Armenia', 'Argentina', 'Uzbekistan', 'Ukraine',
  'Turkey', 'Thailand', 'Saudi Arabia', 'Switzerland',
  'South Korea', 'China', 'Finland', 'Georgia',
  'Germany', 'Italy', 'Kazakhstan', 'Czech Republic',
  'Japan', 'Russia', 'France', 'Spain', 'Maldives',
  'Uruguay',  'Canada',
]

export enum CountryEnum {
  argentina = 'Argentina',
  armenia = 'Armenia',
  azerbaijan = 'Azerbaijan',
  belgium = 'Belgium',
  belarus = 'Belarus',
  brazil = 'Brazil',
  canada = 'Canada',
  uzbekistan = 'Uzbekistan',
  uruguay = 'Uruguay',
  united_state = 'United States',
  united_kingdom = 'United Kingdom',
  united_arab_emirates = 'United Arab Emirates',
  ukraine = 'Ukraine',
  turkey = 'Turkey',
  thailand = 'Thailand',
  switzerland = 'Switzerland',
  south_korea = 'South Korea',
  saudi_arabia = 'Saudi Arabia',
  china = 'China',
  finland = 'Finland',
  georgia = 'Georgia',
  germany = 'Germany',
  italy = 'Italy',
  kazakhstan = 'Kazakhstan',
  czech_republic = 'Czech Republic',
  japan = 'Japan',
  russia = 'Russia',
  france = 'France',
  spain = 'Spain',
  maldives = 'Maldives',
  egypt = 'Egypt',
}
export interface SearchResult {
  destination:Airport
  from:Airport
  passengers: {
    adults: number,
    child: number,
    infant: number
  }
  rangeDate?: {
    start: Date
    end: Date
  }
  date?: Date
}

export type DropDownOptions = {
  [keyof in TypeOfPassengersName]: number
}

export interface SearchFormGroup {
  from: FormControl<any | null>
  destination: FormControl<any | null>
  date: FormControl<string | null>
  passengers: FormGroup<FormPassengers>
  rangeDate: FormGroup<{
    start: FormControl<string | null>;
    end: FormControl<string | null>;
  }>
}

interface FormPassengers {
  adults: FormControl<number | null>
  child: FormControl<number | null>
  infant: FormControl<number | null>
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

export interface CarouselData {
  id: number
  destination: Airport
  destinationDate: string
  duration: number
  flight: boolean
  from: Airport
  flightNumber: string
  fromDate: string
  price: number
  seats: number
}
