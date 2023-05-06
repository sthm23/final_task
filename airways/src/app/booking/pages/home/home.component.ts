import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchResult } from 'src/app/material/interfaces/interfaces';
import { selectSearchOrder } from 'src/app/redux/selectors/airways.selector';
import { UserOrder } from 'src/app/redux/state.model';
import { SearchTicketService } from '../../services/searchTicket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchOrder$!:Observable<SearchResult>;

  constructor(
    private store: Store,
    private searchTicket: SearchTicketService
  ) {}

  ngOnInit(): void {
    this.searchOrder$ = this.store.select(selectSearchOrder) as Observable<SearchResult>;
    const search = localStorage.getItem('search_result')!;
    const searchResult = JSON.parse(search) as SearchResult;

    // console.log(searchResult);

    const ticket = this.searchTicket.getTicket(searchResult);


  }

}
