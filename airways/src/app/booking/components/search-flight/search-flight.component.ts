import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {

  cityFrom = 'Dublin'
  cityDestination = 'Warsaw Modlin'

  searchFormBlockToggler = false

  constructor() {}

  ngOnInit(): void {

  }

  showSearchForm() {
    this.searchFormBlockToggler = !this.searchFormBlockToggler
  }

}
