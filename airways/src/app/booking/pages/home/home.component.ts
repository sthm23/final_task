import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchResult } from 'src/app/material/interfaces/interfaces';
import { selectSearchOrder } from 'src/app/redux/selectors/airways.selector';
import { UserOrder } from 'src/app/redux/state.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchOrder$!:Observable<SearchResult>;

  constructor(
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.searchOrder$ = this.store.select(selectSearchOrder) as Observable<SearchResult>;
  }

}
