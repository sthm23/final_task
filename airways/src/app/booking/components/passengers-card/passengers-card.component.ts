import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PassengersCard } from '../../pages/config-passengers/config-passengers.component';

@Component({
  selector: 'app-passengers-card',
  templateUrl: './passengers-card.component.html',
  styleUrls: ['./passengers-card.component.scss']
})
export class PassengersCardComponent implements OnInit {
  @Input() passenger!: PassengersCard;
  @Input() createForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {}

}
