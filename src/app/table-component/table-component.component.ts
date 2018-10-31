import {Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponent implements OnInit {
  dataSource: object[];
  titles: string[] =
    ['Title', 'Amount', 'Date', 'Details'];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.expensesMessage.subscribe(
      message => this.dataSource = message
    );
  }
  removeExpense(row: number) {
    this.dataSource.splice(row, 1);
  }
}
