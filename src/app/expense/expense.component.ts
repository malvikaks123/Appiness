import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Expense } from '../classes/Expenses';
import { Pipe, PipeTransform } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  p: number = 1;
  systemData: any = {};
  addSystemData: any = {};
  editSystemData: any = {};
  rowIndex: any;
  tempDeleteArray: any = []
  dataToDelete: any;
  @ViewChild('myModal1') myModal1: ElementRef;
  constructor(private expenseManagement: ExpenseService, private _route: Router) { }


  ngOnInit() {
    this.systemData = this.expenseManagement.getExpenseDataArray();
    this.addSystemData = {

      "id": null,
      "category": "",
      "itemName": "",
      "amount": null,
      "Date": ""

    }

    this.editSystemData = {

      "id": null,
      "category": "",
      "itemName": "",
      "amount": null,
      "Date": ""

    }
  }



  // delete expense
  uiDeleteEntry(data) {
    this.dataToDelete = data;

    this.myModal1.nativeElement.click();

  }
  // confirm Yes delete
  uiYes() {
    this.expenseManagement.DeleteExpense(this.dataToDelete);
    this.tempDeleteArray.push(this.dataToDelete);
  }
  uiUndoDelete() {

    let poppedData = this.tempDeleteArray.pop();
    this.systemData = this.expenseManagement.getExpenseDataArray();
    if (poppedData) {
      this.systemData.push(poppedData);

    }
  }
  // add new expense to the expense data
  uiAddExpense(expenseData) {
    this.expenseManagement.addExpense(expenseData);
    this.systemData = this.expenseManagement.getExpenseDataArray();

  }
  // edit expense
  uiEditExpense(expenseData) {
    this.expenseManagement.editExpense(expenseData, this.rowIndex);
    this.systemData = this.expenseManagement.getExpenseDataArray();
  }

  getRowData(editdata, index) {
    this.rowIndex = index;
    this.editSystemData = {

      "id": editdata.id,
      "category": editdata.category,
      "itemName": editdata.itemName,
      "amount": editdata.amount,
      "Date": editdata.Date

    }
  }
}





