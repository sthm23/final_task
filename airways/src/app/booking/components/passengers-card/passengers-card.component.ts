import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-passengers-card',
  templateUrl: './passengers-card.component.html',
  styleUrls: ['./passengers-card.component.scss']
})
export class PassengersCardComponent implements OnInit {
  @Input() passenger!: string;
  @Input() form!: FormControl;
  createForm!: FormGroup



  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.createForm = this.rootFormGroup.control.get(this.passenger) as FormGroup;
  }
}
