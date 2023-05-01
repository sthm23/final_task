import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

type TypeOfPassengersName = 'Adults' | 'Child' | 'Infant';
interface DropDownOptions {name: TypeOfPassengersName, count: number}
interface SearchFormGroup {
  from: FormControl
  destination: FormControl
  date: FormControl
  passengers: FormArray<FormControl<DropDownOptions | null>>
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

  form!:FormGroup<SearchFormGroup>;

  flightType = '1'

  constructor() { }

  ngOnInit(): void {
   const formArr = this.dropdownOptions.map(item=>new FormControl(item, [Validators.required]));
   this.form = new FormGroup({
    from: new FormControl('', ),
    destination: new FormControl('', ),
    date: new FormControl('', ),
    passengers: new FormArray(formArr),
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

  submitSearch(){
    console.log(this.form.value);

  }
}
