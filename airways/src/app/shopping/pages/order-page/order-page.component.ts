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
    this.cartService.getAllTrips().subscribe(el=>{
      this.cartService.items = el.map(el=>{
        return {...el.data, id:el.id}
      });;
      this.getData = el.map(el=>{
        return {...el.data, id:el.id}
      });
      this.selectItem(this.getData)
    })

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
    this.selection.clear()
    this.commonPrice = 0
    this.cartService.removeTrip(element.id!).subscribe(el=>{
      this.cartService.items = el.map(el=>{
        return {...el.data, id:el.id}
      });
      this.getData = el.map(el=>{
        return {...el.data, id:el.id}
      });
        this.selectItem(this.getData)
    })

  }

  editItem(element: CartInfo){
    console.log(element);

  }

  payment() {
    alert('mission compleat')
  }

}
