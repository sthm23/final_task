import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['No.', 'Flight', 'Type trip', 'Data & Time', 'Passengers', 'Price', 'btn'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(true, []);

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.dataSource.data = this.getData;
    for (let i = 0; i < this.dataSource.data.length; i++) {
      this.selection.toggle(this.dataSource.data[i])
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  get getData() {
    return JSON.parse(localStorage.getItem('cart-items')!);
  }
}
