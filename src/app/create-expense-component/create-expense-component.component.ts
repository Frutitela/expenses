import {Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';

export interface Expense {
  title: string;
  amount: number;
  date: string;
  type: string;
  details: string;
}

export interface ExpenseType {
  label: string;
  value: string;
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
  expenseTypeLabel = 'Expense Type';
  type: string;
  showExpenseTypeMenu = false;
  expenseTypeMenuSelected = false;
  expenseType: ExpenseType[] = [
    {
      label: 'Food',
      value: 'food',
    },
    {
      label: 'Home',
      value: 'home',
    },
    {
      label: 'Entretainment',
      value: 'entretainment',
    },
    {
      label: 'Care',
      value: 'care',
    },
  ];
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.expensesMessage.subscribe(
      message => this.expenseList = message
    );
  }

  addExpense(): void {
    this.expense = {
      title: this.title || '',
      amount: this.amount || 0,
      date: this.date || '',
      type: this.type || '',
      details: this.details || '',
    };
    this.expenseList.push(this.expense);
    this.data.changeMessage(this.expenseList);
  }

  getListValue(typeData: ExpenseType): void {
    this.expenseTypeLabel = typeData.label;
    this.type = typeData.value;
    this.showExpenseTypeMenu = false;
    this.expenseTypeMenuSelected = true;
  }

  showMenu(): void {
    this.showExpenseTypeMenu = true;
  }
}
