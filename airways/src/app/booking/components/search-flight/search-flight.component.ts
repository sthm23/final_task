import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

type TypeOfPassengersName = 'Adults' | 'Child' | 'Infant';
interface DropDownOptions {name: TypeOfPassengersName, count: number}
@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {
  showBtnBlock= true

  cityFrom = 'Dublin'
  cityDestination = 'Warsaw Modlin'
  flightDate = ''
  flightBackDate = ''
  destinationDate = ''

  searchFormBlockToggler = false
  dropdownOptions: DropDownOptions[] = [
    {
      name: 'Adults',
      count: 0
    },
    {
      name: 'Child',
      count: 0
    },
    {
      name: 'Infant',
      count: 0
    },
  ]


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((e:any)=>{
      const urlObj = e?.routerEvent as NavigationEnd | undefined
      if(e?.routerEvent) {
        const str = urlObj?.url!;
        this.showBtnBlock = str === '/booking'
        this.searchFormBlockToggler = false
      }
    })
  }

  showSearchForm() {
    this.searchFormBlockToggler = !this.searchFormBlockToggler
  }

  dropdownValueChanged(e:DropDownOptions[]) {
    this.dropdownOptions = e;

  }

}