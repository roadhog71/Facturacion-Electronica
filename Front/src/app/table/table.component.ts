import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomPaginator } from './CustomPaginatorConfiguration';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  date: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

export interface PeriodicElement {
  date: string;
  position: number;
  total: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, date: 'Hydrogen', total: 1.0079 },
  { position: 2, date: 'Helium', total: 4.0026 },
  { position: 3, date: 'Lithium', total: 6.941 },
  { position: 4, date: 'Beryllium', total: 9.0122 },
  { position: 5, date: 'Boron', total: 10.811 },
  { position: 6, date: 'Carbon', total: 12.0107 },
  { position: 7, date: 'Nitrogen', total: 14.0067 },
  { position: 8, date: 'Oxygen', total: 15.9994 },
  { position: 9, date: 'Fluorine', total: 18.9984 },
  { position: 10, date: 'Neon', total: 20.1797 },
];

/**
 * @title Table with selection
 */

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }, // Here
  ],
})
export class TableComponent implements AfterViewInit {
  task: Task = {
    date: 'Seleccione un formato',
    completed: false,
    color: 'accent',
    subtasks: [
      { date: 'XML', completed: false, color: 'primary' },
      { date: 'PDF', completed: false, color: 'warn' },
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete =
      this.task.subtasks != null &&
      this.task.subtasks.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }

  displayedColumns: string[] = ['select', 'position', 'name', 'weight'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
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

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
