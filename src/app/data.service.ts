import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Expense} from './create-expense-component/create-expense-component.component';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private expensesSource =
    new BehaviorSubject<Expense[]>([]);
  expensesMessage = this.expensesSource.asObservable();
  constructor() { }

  changeMessage(message: Expense[]) {
   this.expensesSource.next(message);
  }
}
