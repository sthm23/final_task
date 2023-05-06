import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpRequestService } from '../../services/http-request.service';
import { Airport, DropDownOptions, SearchFormGroup } from 'src/app/material/interfaces/interfaces';
import { Router } from '@angular/router';
import { selectUser } from 'src/app/redux/selectors/airways.selector';
import { Store } from '@ngrx/store';
import { enterMain } from 'src/app/redux/actions/airways.action';
import { User } from 'src/app/redux/state.model';


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

  // passengers = new FormGroup({
  //   adults: new FormControl(0, [Validators.required, Validators.pattern(/[1-9]/)]),
  //   child: new FormControl(0, [Validators.required, Validators.pattern(/[1-9]/)]),
  //   infant: new FormControl(0, [Validators.required, Validators.pattern(/[1-9]/)])
  // })

  cities: Airport[] = [
    {
      "id": 1,
      "code": "AAA",
      "name": "Anaa Airport",
      "city": "Anaa",
      "state": "Tuamotu-Gambier",
      "country": "French Polynesia"
  },
  {
      "id": 2,
      "code": "AAE",
      "name": "El Mellah Airport",
      "city": "El Tarf",
      "state": "Annaba",
      "country": "Algeria"
  },
  {
      "id": 3,
      "code": "AAL",
      "name": "Aalborg Airport",
      "city": "Norresundby",
      "state": "Nordjylland",
      "country": "Denmark"
  },
  {
      "id": 4,
      "code": "AAM",
      "name": "Mala Mala",
      "city": "Mala Mala",
      "state": "",
      "country": "South Africa"
  },
  {
      "id": 5,
      "code": "AAN",
      "name": "Al Ain Airport",
      "city": "Ayn al Faydah",
      "state": "Abu Dhabi",
      "country": "United Arab Emirates"
  },
  {
      "id": 6,
      "code": "AAQ",
      "name": "Olkhovka Airport",
      "city": "Novorossiysk",
      "state": "Krasnodarskiy Kray",
      "country": "Russia"
  },
  {
      "id": 7,
      "code": "AAR",
      "name": "Tirstrup Airport",
      "city": "Kolind",
      "state": "Midtjylland",
      "country": "Denmark"
  },
  {
      "id": 8,
      "code": "AAT",
      "name": "Altay Airport",
      "city": "Altay",
      "state": "Xinjiang",
      "country": "China"
  },
  {
      "id": 9,
      "code": "AAX",
      "name": "Romeu Zuma Airport",
      "city": "Araxá",
      "state": "Minas Gerais",
      "country": "Brazil"
  },
  {
      "id": 10,
      "code": "AAY",
      "name": "Al Gaidah Airport",
      "city": "Al Ghaydah",
      "state": "Hadramawt",
      "country": "Yemen"
  },
  {
      "id": 11,
      "code": "ABA",
      "name": "Abakan",
      "city": "Abakan",
      "state": "Khakasiya",
      "country": "Russian Federation"
  },
  ]

  form:FormGroup<SearchFormGroup> = new FormGroup({
    from: new FormControl(null, Validators.required),
    destination: new FormControl(null, Validators.required),
    date: new FormControl<Date | null>(null, Validators.required),
    passengers: new FormGroup({
      adults: new FormControl(0, [Validators.required, Validators.pattern(/[1-9]/)]),
      child: new FormControl(0, [Validators.required, Validators.pattern(/[0-9]/)]),
      infant: new FormControl(0, [Validators.required, Validators.pattern(/[0-9]/)])
    }),

    rangeDate: new FormGroup({
      start: new FormControl<Date | null>(null, Validators.required),
      end: new FormControl<Date | null>(null, Validators.required),
    })
  });

  flightType = '1'

  constructor(
    private route: Router,
    private store: Store,
    private httpService: HttpRequestService
  ) { }

  ngOnInit(): void {
    this.httpService.getAllAirport().subscribe(airports=>{
      // this.cities = airports
    })

    this.form.controls.date.disable();
    this.form.controls.rangeDate.enable();
    const user_json = localStorage.getItem('user_name');
    let user: User | null = null
    if(user_json) {
      user = JSON.parse(user_json) as User;
    }
    this.store.dispatch(enterMain({user}));
  }

  selectFlightType(event: MatRadioChange) {
    this.flightType = event.value;
    if(event.value === '1') {
      this.form.controls.date.disable();
      this.form.controls.rangeDate.enable()
    } else {
      this.form.controls.rangeDate.disable()
      this.form.controls.date.enable();
    }
  }

  dropdownValueChanged(e:DropDownOptions[]) {
    this.dropdownOptions = e;
    e.forEach(item=>{
      const name = item.name.toLowerCase() as 'adults' | 'infant' | 'child';
      this.form.controls.passengers.controls[name].setValue(item.count);
    });
  }

  submitSearch(){
    const form = this.form.value;
    console.log(form);
    console.log(this.form.valid);
    const el = this.store.select(selectUser);
    el.subscribe(user=>{
      console.log(user);

    })
    // if(this.form.valid && ) {

    // }

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
