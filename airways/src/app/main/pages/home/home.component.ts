import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpRequestService } from '../../services/http-request.service';
import { Country, DropDownOptions, SearchFormGroup } from 'src/app/material/interfaces/interfaces';
import { MatDateRangePicker, MatDatepickerControl } from '@angular/material/datepicker';


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

  cities: Country[] = []

  form!:FormGroup<SearchFormGroup>;

  flightType = '1'

  constructor(private formBuilder: FormBuilder, private httpService: HttpRequestService) { }

  ngOnInit(): void {
    this.httpService.getAllCountry().subscribe(city=>{
      this.cities = city;
    })

    const formArr = this.dropdownOptions.map(item=>new FormControl(item, [Validators.required]));
    this.form = this.formBuilder.group({
      from: new FormControl('', ),
      destination: new FormControl('', ),
      date: new FormControl({disabled: true, value: ''}, ),
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

  flipFlight() {
    const from = this.form.controls.destination.value || '';
    const dest = this.form.controls.from.value || '';
    this.form.controls.from.setValue(from);
    this.form.controls.destination.setValue(dest);
  }

  openDateBlock(e:any) {
    e.open()
  }
}
