
export class UserEntity {
  id: string;
  login: string;
  password: string;
  phoneNumber: string;
  email: string;
  createDate: string;
  firstName: string
  lastName: string
  birthday: string
  country: string
  citizenship: string
  gender: GenderType
}

export type GenderType = 'male' | 'female';

export type CreateUser = Omit<UserEntity, 'id'>

export type CurrencyType = 'EUR' | 'USA' | 'RUB' | 'PLN';