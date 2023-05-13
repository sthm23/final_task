import { Component, ViewEncapsulation, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectSearchOrder, selectTicket } from 'src/app/redux/selectors/airways.selector';
import { TypeOfPassengersName } from 'src/app/redux/state.model';
import { SearchTicketService } from '../../services/searchTicket.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
interface PhoneNumber {
  number: string;
}
export interface PassengersCard {
  title: string;
}
@Component({
  selector: 'app-config-passengers',
  templateUrl: './config-passengers.component.html',
  styleUrls: ['./config-passengers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigPassengersComponent implements OnInit {
  @Output() createForm!: FormGroup;
  contact!: FormGroup;
  numberRegex = new RegExp('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{2}[-\\s\\.]?[0-9]{4,6}$');
  numbers$ = this.search.getPhoneNumbers();

  passengersCard: PassengersCard[] = [
    // { title: 'adults' },
    // { title: 'child' },
    // { title: 'infant' }
  ];

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private search: SearchTicketService,
    private route: Router
  ) { }

  ngOnInit() {
    this.createForm = new FormGroup({
      'adults': this.fb.array([]),
      'child': this.fb.array([]),
      'infant': this.fb.array([]),
      'contact': this.fb.group({
        'countryCode': new FormControl(null, [Validators.required]),
        'mobile': new FormControl(null, [Validators.required, Validators.pattern(this.numberRegex)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      })
    });
    this.contact = this.createForm.get('contact') as FormGroup;
    const ticket_result = JSON.parse(localStorage.getItem('ticket')!);
    const search_result = JSON.parse(localStorage.getItem('search_result')!);

    for (const key in search_result.passengers) {
      if (Object.prototype.hasOwnProperty.call(search_result.passengers, key)) {
        const element = search_result.passengers[key];
        if (element) {

          for (let i = 0; i < element; i++) {
            this.passengersCard.push({ title: key })
          }

        } else {
          this.createForm.get(key)?.disable()
        }
      }
    }
    console.log(this.passengersCard);


    // this.store.select(selectSearchOrder).subscribe(search => {
    //   console.log(search);
    // })

    // this.store.select(selectTicket).subscribe(ticket=>{
    //   console.log(ticket);
    // })
  }

  onSubmit() {
    console.log(this.createForm.value);
    if (this.createForm.valid) {
      localStorage.setItem('passengers_info', JSON.stringify(this.createForm.value))
      this.route.navigate(['/booking/summary'])
    }
  }
}
