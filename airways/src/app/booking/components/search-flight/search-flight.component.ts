import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { fromToReturnIcon } from './icon';
import { Airport, DropDownOptions, SearchResult } from 'src/app/material/interfaces/interfaces';
import { UserOrder } from 'src/app/redux/state.model';
import { SelectionChange } from '@angular/cdk/collections';
import { MatSelectChange } from '@angular/material/select';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {
  showBtnBlock= true
  minDate = new Date();
  form = new FormGroup({
    from: new FormControl(),
    dest: new FormControl(),
    date: new FormControl(),
    passengers: new FormControl(),
    rangeDate: new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    }),
  })

  cityFrom = 'Dublin'
  cityDestination = 'Warsaw Modlin'

  flightDate:Date = new Date()
  flightBackDate:Date | undefined;

  searchFormBlockToggler = false

  dropdownOptions: DropDownOptions = {
    adults: 0,
    child: 0,
    infant: 0,
  }

  cities: Airport[] = [
    {
      "id": 1,
      "code": "AAA",
      "name": "Anaa Airport",
      "city": "Anaa",
      "state": "Tuamotu-Gambier",
      "country": "French Polynesia"
  },
  {
      "id": 2,
      "code": "AAE",
      "name": "El Mellah Airport",
      "city": "El Tarf",
      "state": "Annaba",
      "country": "Algeria"
  },
  {
      "id": 3,
      "code": "AAL",
      "name": "Aalborg Airport",
      "city": "Norresundby",
      "state": "Nordjylland",
      "country": "Denmark"
  },
  {
      "id": 4,
      "code": "AAM",
      "name": "Mala Mala",
      "city": "Mala Mala",
      "state": "",
      "country": "South Africa"
  },
  {
      "id": 5,
      "code": "AAN",
      "name": "Al Ain Airport",
      "city": "Ayn al Faydah",
      "state": "Abu Dhabi",
      "country": "United Arab Emirates"
  },
  {
      "id": 6,
      "code": "AAQ",
      "name": "Olkhovka Airport",
      "city": "Novorossiysk",
      "state": "Krasnodarskiy Kray",
      "country": "Russia"
  },
  {
      "id": 7,
      "code": "AAR",
      "name": "Tirstrup Airport",
      "city": "Kolind",
      "state": "Midtjylland",
      "country": "Denmark"
  },
  {
      "id": 8,
      "code": "AAT",
      "name": "Altay Airport",
      "city": "Altay",
      "state": "Xinjiang",
      "country": "China"
  },
  {
      "id": 9,
      "code": "AAX",
      "name": "Romeu Zuma Airport",
      "city": "Araxá",
      "state": "Minas Gerais",
      "country": "Brazil"
  },
  {
      "id": 10,
      "code": "AAY",
      "name": "Al Gaidah Airport",
      "city": "Al Ghaydah",
      "state": "Hadramawt",
      "country": "Yemen"
  },
  {
      "id": 11,
      "code": "ABA",
      "name": "Abakan",
      "city": "Abakan",
      "state": "Khakasiya",
      "country": "Russian Federation"
  },
  ]

  @Input() searchData!: SearchResult | null;

  constructor(
    private router: Router,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
    ) {
    iconRegistry.addSvgIconLiteral('fromToReturnIcon', sanitizer.bypassSecurityTrustHtml(fromToReturnIcon));
  }

  ngOnInit(): void {
    this.router.events.subscribe((e:any)=>{
      const urlObj = e?.routerEvent as NavigationEnd | undefined
      if(e?.routerEvent) {
        const str = urlObj?.url!;
        this.showBtnBlock = str === '/booking'
        this.searchFormBlockToggler = false
      }
    })
    const search = localStorage.getItem('search_result');
    if(search) {
      this.searchData = JSON.parse(search);
    }
    this.flightDate = this.searchData?.rangeDate?.start! || this.searchData?.date;
    this.flightBackDate = this.searchData?.rangeDate?.end;
    this.dropdownOptions = this.searchData?.passengers!
    this.cityFrom = this.searchData?.from.city!
    this.cityDestination = this.searchData?.destination.city!
    this.form.controls.from.setValue(this.searchData?.from?.city);
    this.form.controls.dest.setValue(this.searchData?.destination?.city);
    this.form.controls.date.setValue(this.searchData?.date || this.searchData?.rangeDate)
    this.form.controls.rangeDate.controls.start.setValue(this.searchData?.rangeDate?.start)
    this.form.controls.rangeDate.controls.end.setValue(this.searchData?.rangeDate?.end)


    // console.log(this.searchData);

  }

  showSearchForm() {
    this.searchFormBlockToggler = !this.searchFormBlockToggler
  }

  dropdownValueChanged(e:DropDownOptions) {
    this.dropdownOptions = e;
  }

  selectCountry(e:MatSelectChange , type?: 'from') {
    if(type === 'from') {
      this.cityFrom = e.value
    } else {
      this.cityDestination = e.value
    }

  }

}
