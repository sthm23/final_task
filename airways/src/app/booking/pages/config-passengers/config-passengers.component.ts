import { Component, ViewEncapsulation, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectSearchOrder, selectTicket } from 'src/app/redux/selectors/airways.selector';
import { TypeOfPassengersName } from 'src/app/redux/state.model';
import { SearchTicketService } from '../../services/searchTicket.service';
import { DropDownOptions, SearchResult, TicketResult } from 'src/app/material/interfaces/interfaces';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

type pasTypeObj = {
  assist: boolean
  birth:string
  firstName:string
  gender: "male" | "female"
  lastName:string
}
interface Passengers_Info {
  adults?: pasTypeObj[]
  child?: pasTypeObj[]
  infant?: pasTypeObj[]
  contact: {
    countryCode:{
      code: string
      name: string
    }
    email: string
    mobile: string
  }
}
export interface PassengersCard {
  title: string;
  id: number
}
@Component({
  selector: 'app-config-passengers',
  templateUrl: './config-passengers.component.html',
  styleUrls: ['./config-passengers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigPassengersComponent implements OnInit {
  numberRegex = new RegExp('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{2}[-\\s\\.]?[0-9]{4,6}$');

  createForm: FormGroup = new FormGroup({
    'adults': this.fb.array([]),
    'child': this.fb.array([]),
    'infant': this.fb.array([]),
    'contact': this.fb.group({
      'countryCode': new FormControl(null, [Validators.required]),
      'mobile': new FormControl(null, [Validators.required, Validators.pattern(this.numberRegex)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
    })
  });
  contact!: FormGroup;

  numbers$ = this.search.getPhoneNumbers();

  passengersCard: PassengersCard[] = [];

  fromLuggage!:number;
  returnLuggage: number | undefined;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private search: SearchTicketService,
    private route: Router
  ) { }

  ngOnInit() {
    this.contact = this.createForm.get('contact') as FormGroup;
    const ticket_result = JSON.parse(localStorage.getItem('ticket')!) as TicketResult;
    const search_result = JSON.parse(localStorage.getItem('search_result')!) as SearchResult;

    this.fromLuggage = ticket_result.from.luggage
    this.returnLuggage = ticket_result.return?.luggage

    const pas_inf = localStorage.getItem('passengers_info');
    let passengers_info = null as Passengers_Info | null;
    if(pas_inf) {
      passengers_info = JSON.parse(pas_inf) as Passengers_Info;
      this.setValueToForm(passengers_info);

    } else {
      const obj = search_result.passengers as any;
      this.createFormArrayElem(obj);
    }
  }

  setValueToForm(object:Passengers_Info) {
    let key!: keyof Passengers_Info;
    for (key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const el = object[key] as any;
        if(key === 'contact'){
          const s = this.createForm.controls[key] as FormGroup;
          s.controls['countryCode'].setValue(el['countryCode']) //need check again
          s.controls['mobile'].setValue(el.mobile)
          s.controls['email'].setValue(el.email)
        }else{
          const formArr = this.createForm.controls[key] as FormArray;

          for (let i = 0; i < el.length; i++) {
            const formObj = new FormGroup({
              'firstName': new FormControl(el[i].firstName, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
              'lastName': new FormControl(el[i].lastName, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
              'gender': new FormControl(el[i].gender),
              'birth': new FormControl(el[i].birth, [Validators.required]),
              'assist': new FormControl(el[i].assist),
            })
            formArr.push(formObj)
            this.passengersCard.push({
              title: key,
              id: i
            })
          }
        }
      }
    }
  }

  createFormArrayElem(obj:any) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        if (element) {

          for (let i = 0; i < element; i++) {
            const formObj = new FormGroup({
              'firstName': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
              'lastName': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
              'gender': new FormControl(null),
              'birth': new FormControl(null, [Validators.required]),
              'assist': new FormControl(false),
            })
            this.passengersCard.push({ title: key, id: i })
            const passengerArray = (this.createForm.get(key) as FormArray);
            passengerArray.push(formObj)
          }

        } else {
          this.createForm.get(key)?.disable()
        }
      }
    }
  }
  formGroup(name:string, id:number) {
    return (this.createForm.get(name) as FormArray).at(id) as FormGroup
  }
  onSubmit() {
    if (this.createForm.valid) {
      localStorage.setItem('passengers_info', JSON.stringify(this.createForm.value))
      this.route.navigate(['/booking/summary'])
    }
  }
}
