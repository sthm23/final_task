import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
interface Animal {
  name: string;
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
  numberRegex = new RegExp('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{2}[-\\s\\.]?[0-9]{4,6}$')
  animals: Animal[] = [
    { name: '+998' },
    { name: '+71' },
    { name: '+62' },
  ];

  passengersCard: PassengersCard[] = [{ title: 'adult' }, { title: 'child' }, { title: 'infant' }]

  constructor(private fb: FormBuilder) { }

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
  }

  onSubmit() {
    console.log(this.createForm.get('contact'));
  }
}
