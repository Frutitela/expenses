import {Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import {Expense} from '../create-expense-component/create-expense-component.component';

const CURRENT_MONTH = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December',
];

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponent implements OnInit {
  dataSource: Expense[];
  titles: string[] =
    [ 'Title', 'Amount', 'Date', 'Type', 'Comments', ];
  availableMoney = 25000;
  monthExpenses = 0;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.expensesMessage.subscribe(
      (message) => {
        this.dataSource = message;
        this.getTotalMonthAmount();
        this.restToAvailableMoney();
      }
    );
  }

  removeExpense(row: number) {
    this.dataSource.splice(row, 1);
    this.getTotalMonthAmount();
  }

  getCurrentMonth(): string {
    const monthIndex = new Date().getMonth();
    return CURRENT_MONTH[monthIndex];
  }

  getMonthAmountSum(total, num) {
    return total + num;
  }

  getTotalMonthAmount() {
    const amounts = [];
    for (const amount of this.dataSource) {
      amounts.push(amount.amount);
    }
    this.monthExpenses = amounts.reduce(this.getMonthAmountSum, 0);
  }

  restToAvailableMoney() {
    const index = this.dataSource.length - 1;
    if (this.dataSource.length > 0) {
      this.availableMoney =
        this.availableMoney - this.dataSource[index].amount;
    }
  }

  sumToAvailableMoney(row) {
    this.availableMoney =
      this.availableMoney + this.dataSource[row].amount;
  }
}
