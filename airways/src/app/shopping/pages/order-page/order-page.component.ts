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

  displayedColumns: string[] = ['select', 'No.', 'Flight', 'Type trip', 'Data & Time', 'Passengers', 'Price', 'btn'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(true, []);
  commonPrice = 0;
  getData!: CartInfo[];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.getData = this.cartService.items

    this.selectItem(this.getData)
  }

  selectItem(arr: CartInfo[]) {
    this.dataSource.data = arr;
    for (let i = 0; i < arr.length; i++) {
      this.selection.toggle(arr[i]);
      this.commonPrice += (arr[i] as CartInfo).price;
    }
  }

  changeCheckBox(e: MatCheckboxChange, element: CartInfo) {
    e ? this.selection.toggle(element) : null;

    const checkedElem = this.selection.selected.find((item) => item.id === element.id);

    e.checked ? this.commonPrice += checkedElem.price : this.commonPrice -= element.price
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
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

  payment() {
    // console.log(this.selection.selected);

    // const arr = this.selection.selected.map(item=>{
    //   return {
    //     ...item,
    //     check: true
    //   }
    // });

    // this.selectItem(this.getData)
    // this.dataSource.data = this.dataSource.data;
    alert('mission compleat')

  }

}
