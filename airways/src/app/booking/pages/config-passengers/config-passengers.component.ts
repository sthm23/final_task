import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectTicket } from 'src/app/redux/selectors/airways.selector';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
interface PhoneNumber {
  number: string;
}
interface PassengersCard {
  title: string;
}
@Component({
  selector: 'app-config-passengers',
  templateUrl: './config-passengers.component.html',
  styleUrls: ['./config-passengers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigPassengersComponent implements OnInit {
  createForm!: FormGroup;
  contact!: FormGroup;
  numberRegex = new RegExp('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{2}[-\\s\\.]?[0-9]{4,6}$');
  numbers: PhoneNumber[] = [
    { number: '+998' },
    { number: '+71' },
    { number: '+62' },
  ];

  passengersCard: PassengersCard[] = [
    { title: 'adult' },
    { title: 'child' },
    { title: 'infant' }
  ];

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: Router
    ) { }

  ngOnInit() {
    this.createForm = new FormGroup({
      'adult': this.fb.group({
        'firstName': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
        'lastName': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
        'gender': new FormControl(null),
        'birth': new FormControl(null, [Validators.required]),
        'assist': new FormControl(null)
      }),
      'child': this.fb.group({
        'firstName': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
        'lastName': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
        'gender': new FormControl(null),
        'birth': new FormControl(null, [Validators.required]),
        'assist': new FormControl(null)
      }),
      'infant': this.fb.group({
        'firstName': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
        'lastName': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
        'gender': new FormControl(null),
        'birth': new FormControl(null, [Validators.required]),
        'assist': new FormControl(null)
      }),
      'contact': this.fb.group({
        'countryCode': new FormControl(null, [Validators.required]),
        'mobile': new FormControl(null, [Validators.required, Validators.pattern(this.numberRegex)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      })
    });
    this.contact = this.createForm.get('contact') as FormGroup;

    this.store.select(selectTicket).subscribe(ticket=>{
      console.log(ticket);
    })
  }

  onSubmit() {
    console.log(this.createForm.value);
    if(this.createForm.valid) {
      this.route.navigate(['/booking/summary'])
    }
  }
}
