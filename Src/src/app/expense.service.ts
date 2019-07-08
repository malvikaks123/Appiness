import { Injectable } from '@angular/core';
import { Expense } from './classes/Expenses';
import { ExpenseData } from './mock-expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() {


  }
  expenseArray: Expense[] = [];
  // fetch expense data
  getExpenseDataArray(): Expense[] {
    return ExpenseData;
  }
  // add expense data
  addExpense(expensedata) {
    debugger;
    if (ExpenseData.indexOf(expensedata) === -1 && expensedata.id == null)
      expensedata.id = Math.random() + 1;
    ExpenseData.push(expensedata)
  }

  editExpense(expensedata, rowindex) {
    // ExpenseData.forEach(element => {
    //   if (element.id == expensedata.id) {
    //     element.id = expensedata.id;
    //     element.category = expensedata.category;
    //     element.itemName = expensedata.itemName;
    //     element.amount = expensedata.amount;
    //     element.Date = expensedata.Date;
    //     ExpenseData.push(element);
    //   }

    // });
    ExpenseData[rowindex] = expensedata;
  }


  // fetch expense data
  getExpenseData(): Expense[] {
    return this.expenseArray;
  }
  // delete expense data
  DeleteExpense(expensedata: Expense) {
    this.expenseArray = ExpenseData;
    let expenseIndex = this.expenseArray.indexOf(expensedata)
    if (expenseIndex != -1) {
      this.expenseArray.splice(expenseIndex, 1);
    }
  }




}
