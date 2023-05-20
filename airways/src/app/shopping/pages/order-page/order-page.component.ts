import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CartInfo } from 'src/app/material/interfaces/interfaces';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['No.', 'Flight', 'Type trip', 'Data & Time', 'Passengers', 'Price', 'btn'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(true, []);
  commonPrice = 0;

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.dataSource.data = this.getData;
    for (let i = 0; i < this.dataSource.data.length; i++) {
      this.selection.toggle(this.dataSource.data[i]);
      this.commonPrice += (this.dataSource.data[i] as CartInfo).price;
    }
  }

  changeCheckBox(e: MatCheckboxChange, element: CartInfo) {
    e ? this.selection.toggle(element) : null;

    const checkedElem = this.selection.selected.find((item) => item.id === element.id);

    e.checked ? this.commonPrice += checkedElem.price : this.commonPrice -= element.price
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  get getData() {
    return JSON.parse(localStorage.getItem('cart-items')!);
  }
}
