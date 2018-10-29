import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-expense-component',
  templateUrl: './create-expense-component.component.html',
  styleUrls: ['./create-expense-component.component.scss']
})
export class CreateExpenseComponentComponent implements OnInit {
  expenses: string[];
  expenseInput: string;
  constructor() {
  }

  ngOnInit() {
    this.expenses = [];
    this.expenseInput = '';
  }

  addExpense() {
    this.expenses.push(this.expenseInput);
    console.log(this.expenseInput);
  }

}
