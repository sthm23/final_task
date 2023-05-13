import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { PassengersCard } from '../../pages/config-passengers/config-passengers.component';

@Component({
  selector: 'app-passengers-card',
  templateUrl: './passengers-card.component.html',
  styleUrls: ['./passengers-card.component.scss']
})
export class PassengersCardComponent implements OnInit {
  @Input() passenger!: PassengersCard;
  @Input() index!: number;
  @Input() createForm!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getHuman.controls.push(this.newHuman());
  }

  get getHuman() {
    return this.rootFormGroup.control.get(this.passenger.title) as FormArray;
  }

  newHuman(): FormGroup {
    return this.fb.group({
      'firstName': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      'lastName': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      'gender': new FormControl(null),
      'birth': new FormControl(null, [Validators.required]),
      'assist': new FormControl(null)
    })
  }
}
