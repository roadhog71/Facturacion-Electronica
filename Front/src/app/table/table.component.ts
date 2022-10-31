import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomPaginator } from './CustomPaginatorConfiguration';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }, // Here
  ],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['number', 'date', 'total', 'action'];
  dataSource = new MatTableDataSource<TableTest>(TABLE_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface TableTest {
  number: number;
  date: string;
  total: number;
  actions: string;
}

const TABLE_DATA: TableTest[] = [
  { number: 1, date: '', total: 1.0079, actions: '' },
  { number: 2, date: '', total: 4.0026, actions: '' },
  { number: 3, date: '', total: 6.941, actions: '' },
  { number: 4, date: '', total: 9.0122, actions: '' },
  { number: 5, date: '', total: 10.811, actions: '' },
  { number: 6, date: '', total: 12.0107, actions: '' },
  { number: 7, date: '', total: 14.0067, actions: '' },
  { number: 8, date: '', total: 15.9994, actions: '' },
  { number: 9, date: '', total: 18.9984, actions: '' },
  { number: 10, date: '', total: 20.1797, actions: '' },
  { number: 11, date: '', total: 22.9897, actions: '' },
  { number: 12, date: '', total: 24.305, actions: '' },
  { number: 13, date: '', total: 26.9815, actions: '' },
  { number: 14, date: '', total: 28.0855, actions: '' },
  { number: 15, date: '', total: 30.9738, actions: '' },
  { number: 16, date: '', total: 32.065, actions: '' },
  { number: 17, date: '', total: 35.453, actions: '' },
  { number: 18, date: '', total: 39.948, actions: '' },
  { number: 19, date: '', total: 39.0983, actions: '' },
  { number: 20, date: '', total: 40.078, actions: '' },
];
