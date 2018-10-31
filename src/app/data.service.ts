import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  expensesSource =
    new BehaviorSubject<object[]>([]);
  expensesMessage = this.expensesSource.asObservable();
  constructor() { }

  changeMessage(message: object[]) {
   this.expensesSource.next(message);
  }
}
