import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CartInfo } from 'src/app/material/interfaces/interfaces';
import { CartService } from 'src/app/shopping/services/cart.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  displayedColumns: string[] = ['No.', 'Flight', 'Type trip', 'Data & Time', 'Passengers', 'Price'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(true, []);
  commonPrice = 0;
  getData!: CartInfo[];

  constructor(private cartService: CartService, private router: Router){}

  ngOnInit(): void {
    this.cartService.getAllTrips().subscribe(el=>{
      this.cartService.items = el.map(ell=>{
        return {...ell.data, id: ell.id}
      });
      this.getData = el.map(el=>{
        return {...el.data, id: el.id}
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

  moreFlight(element: CartInfo) {
    this.router.navigate(['/user/user-booking', element.id]);
  }

}
