import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['No.', 'Flight', 'Type trip', 'Data & Time', 'Passengers', 'Price', 'btn'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(true, []);

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.dataSource.data = [
      {
        id:1,
        number: ['FR 1925'],
        flight: ['Dublin - Warsaw', 'Moulin - Warsaw'],
        date: ['1 Mar, 2023, 8:40-12:00', '18 Mar, 2023, 7:40-11:00'],
        passengers: [{person: 'Adult', count: 1}, {person: 'Child', count: 1},{person: 'Infant', count: 1},],
        price: 551,
      },
      {
        id:2,
        number: ['FR 1396'],
        flight: ['Gdansk - Warsaw'],
        date: ['28 Mar, 2023, 15:40-16:40'],
        passengers: [{person: 'Adult', count: 1}, {person: 'Child', count: 0},{person: 'Infant', count: 0},],
        price: 20.96,
      },
    ];
    for (let i = 0; i < this.dataSource.data.length; i++) {
      this.selection.toggle(this.dataSource.data[i])
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
