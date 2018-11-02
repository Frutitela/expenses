import {Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';

export interface Expense {
  title: string;
  amount: number;
  date: string;
  details: string;
}


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
  expense: Expense;
  expenseList: Expense[] = [];
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
  }
}
