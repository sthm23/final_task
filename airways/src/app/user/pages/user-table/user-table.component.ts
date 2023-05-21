import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
export interface CartInfo {
  id: number,
  flightNumber: string,
  destination: {
    from: string,
    return: string,
  },
  flightType: string,
  departureDate: {
    from: string,
    return: string,
  },
  arrivalDate: {
    from: Date,
    return: Date,
  },
  passengerAmount: {
    adults: number,
    child: number,
    infant: number
  },
  price: number,
}
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['No.', 'Flight', 'Type trip', 'Data & Time', 'Passengers', 'Price', 'btn'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(true, []);
  commonPrice = 0;
  getData!: CartInfo[];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.dataSource.data = this.userService.getData;
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

  moreFlight(element: CartInfo) {
    console.log(element);
    this.router.navigate(['/user/user-booking']);
  }

  deleteItem(element: CartInfo){
    console.log(element);
  }

  editItem(element: CartInfo){
    console.log(element);
  }
}
