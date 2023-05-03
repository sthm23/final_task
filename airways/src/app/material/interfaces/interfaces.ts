import { FormArray, FormControl, FormGroup } from "@angular/forms";

export type TypeOfPassengersName = 'Adults' | 'Child' | 'Infant';

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
