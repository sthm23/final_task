import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpRequestService } from '../../services/http-request.service';
import { Airport, DropDownOptions, SearchFormGroup } from 'src/app/material/interfaces/interfaces';
import { Router } from '@angular/router';
import { selectSearchOrder } from 'src/app/redux/selectors/airways.selector';
import { Store } from '@ngrx/store';
import { searchAction } from 'src/app/redux/actions/airways.action';
import { TypeOfPassengersName } from 'src/app/redux/state.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dropdownOptions: DropDownOptions = {
    adults: 0,
    child: 0,
    infant: 0,
  }

  cities: Airport[] = []

  form:FormGroup<SearchFormGroup> = new FormGroup({
    from: new FormControl<any | null>(null, Validators.required),
    destination: new FormControl<any | null>(null, Validators.required),
    date: new FormControl<Date | null>(null, Validators.required),
    passengers: new FormGroup({
      adults: new FormControl<number>(0, [Validators.required, Validators.pattern(/[1-9]/)]),
      child: new FormControl<number>(0, [Validators.required, Validators.pattern(/[0-9]/)]),
      infant: new FormControl<number>(0, [Validators.required, Validators.pattern(/[0-9]/)])
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
    private httpService: HttpRequestService,
  ) { }

  ngOnInit(): void {
    this.httpService.getAllAirport().subscribe(airports=>{
      this.cities = airports
    })

    this.form.controls.date.disable();
    this.form.controls.rangeDate.enable();

    this.store.select(selectSearchOrder).subscribe(item=>{
      if(item) {
        const {from, date, destination, passengers, rangeDate} = item;
        this.form.get('from')?.setValue(from!)
        this.form.get('date')?.setValue(date!)
        this.form.get('destination')?.setValue(destination!)
        this.form.get('passengers')?.get('adults')?.setValue(passengers?.adults!)
        this.form.get('passengers')?.get('child')?.setValue(passengers?.child!)
        this.form.get('passengers')?.get('infant')?.setValue(passengers?.infant!)
        this.form.get('rangeDate')?.get('start')?.setValue(rangeDate?.start!)
        this.form.get('rangeDate')?.get('end')?.setValue(rangeDate?.end!)

        this.dropdownOptions = {
          adults: passengers?.adults!,
          child: passengers?.child!,
          infant: passengers?.infant!
        };
      }
    })
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

  dropdownValueChanged(e:DropDownOptions) {
    this.dropdownOptions = e;
    let key:TypeOfPassengersName = 'adults'
    for (key in e) {
      if (Object.prototype.hasOwnProperty.call(e, key)) {
        const element = e[key];
        this.form.controls.passengers.controls[key].setValue(element);
      }
    }
  }

  submitSearch(){
    if(this.form.valid) {
      localStorage.setItem('search_result', JSON.stringify(this.form.value))
      this.store.dispatch(searchAction({searchResult: this.form.value}));
      this.route.navigate(['/booking'])
    }
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
