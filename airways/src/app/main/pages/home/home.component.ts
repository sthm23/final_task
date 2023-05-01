import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

type TypeOfPassengersName = 'Adults' | 'Child' | 'Infant';
interface DropDownOptions {name: TypeOfPassengersName, count: number}
interface SearchFormGroup {
  from: FormControl
  destination: FormControl
  date: FormControl<string | null>
  passengers: FormArray<FormControl<DropDownOptions | null>>
  rangeDate: FormGroup<{
    start: FormControl<Date | null>;
    end: FormControl<Date | null>;
  }>
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dropdownOptions: DropDownOptions[] = [
    {
      name: 'Adults',
      count: 0
    },
    {
      name: 'Child',
      count: 0
    },
    {
      name: 'Infant',
      count: 0
    },
  ]

  cities = [{name:'Dublin DUB 1'}, {name:'Dublin DUB 2'}, {name:'Dublin DUB 3'}]

  form!:FormGroup<SearchFormGroup>;

  flightType = '1'

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
   const formArr = this.dropdownOptions.map(item=>new FormControl(item, [Validators.required]));
   this.form = this.formBuilder.group({
    from: new FormControl('', ),
    destination: new FormControl('', ),
    date: new FormControl('', ),
    passengers: new FormArray(formArr),

    rangeDate: this.formBuilder.group({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    })
  });
  }

  selectFlightType(event: MatRadioChange) {
    this.flightType = event.value;
  }

  dropdownValueChanged(e:DropDownOptions[]) {
    this.dropdownOptions = e;
    const passengersArr = e.map(item=>new FormControl(item, [Validators.required]));
    const passengers = new FormArray(passengersArr);
    this.form.setControl('passengers', passengers);
  }

  setRouteDate(e:any) {
    console.log(e);

  }

  submitSearch(){
    console.log(this.form.value);

  }
}
