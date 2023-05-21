import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CartInfo } from 'src/app/material/interfaces/interfaces';
import { CartService } from '../../services/cart.service';

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
  getData!: CartInfo[];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.getData = this.cartService.items

    this.dataSource.data = this.getData;
    for (let i = 0; i < this.dataSource.data.length; i++) {
      this.selection.toggle(this.dataSource.data[i]);
      this.commonPrice += (this.dataSource.data[i] as CartInfo).price;
    }
  }

  changeCheckBox(e: any, element: CartInfo) {
    e ? this.selection.toggle(element) : null;

    const checkedElem = this.selection.selected.find((item) => item.id === element.id);

    !checkedElem ?  this.commonPrice -= element.price : this.commonPrice += checkedElem?.price;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  deleteItem(element: CartInfo){
    console.log(element);
  }

  editItem(element: CartInfo){
    console.log(element);
  }
}
