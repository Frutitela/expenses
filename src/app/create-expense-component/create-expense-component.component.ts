import {Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-expense-component',
  templateUrl: './create-expense-component.component.html',
  styleUrls: ['./create-expense-component.component.scss']
})
export class CreateExpenseComponent implements OnInit {
  title: string;
  amount = 0;
  date: string;
  details: string;
  expense: object;
  expenseList: object[] = [];
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.expensesMessage.subscribe(
      message => this.expenseList = message
    );
  }

  addExpense() {
    this.expense = {
      title: this.title || '',
      amount: this.amount || 0,
      date: this.date || '',
      details: this.details || '',
    };
    this.expenseList.push(this.expense);
    this.data.changeMessage(this.expenseList);
    console.log(this.expenseList);
  }
}
