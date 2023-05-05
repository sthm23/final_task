import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpRequestService } from '../../services/http-request.service';
import { Airport, Country, DropDownOptions, SearchFormGroup } from 'src/app/material/interfaces/interfaces';


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

  cities: Airport[] = []

  form!:FormGroup<SearchFormGroup>;

  flightType = '1'

  constructor(private formBuilder: FormBuilder, private httpService: HttpRequestService) { }

  ngOnInit(): void {
    this.httpService.getAllAirport().subscribe(airports=>{
      this.cities = airports
    })

    const formArr = this.dropdownOptions.map(item=>new FormControl(item, [Validators.required]));
    this.form = this.formBuilder.group({
      from: new FormControl(null),
      destination: new FormControl(null),
      date: new FormControl<Date | null>(null),
      passengers: new FormArray(formArr),

      rangeDate: this.formBuilder.group({
        start: new FormControl<Date | null>(null),
        end: new FormControl<Date | null>(null),
      })
    }) as any;

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
    const from = this.form.controls.destination.value;
    const dest = this.form.controls.from.value;
    this.form.controls.from.setValue(from);
    this.form.controls.destination.setValue(dest);
  }

  openDateBlock(e:any) {
    e.open()
  }
}
