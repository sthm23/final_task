import { Component, Input, OnInit } from '@angular/core';
import { FormControlName, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-passengers-card',
  templateUrl: './passengers-card.component.html',
  styleUrls: ['./passengers-card.component.scss']
})
export class PassengersCardComponent implements OnInit {
  @Input() passenger!: string;
  createForm!: FormGroup

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.createForm = this.rootFormGroup.control.get(this.passenger) as FormGroup;
  }

  onToggle(event: MatSlideToggleChange) {
    console.log(event.checked);
  }
}
