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
  systemData: any = {};
  addSystemData: any = {};
  editSystemData: any = {};
  rowIndex: any;
  tempDeleteArray: any = []
  @ViewChild('myModal1') myModal1;
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
  openMe() {

    this.myModal1.nativeElement.show();
  }

  // open side bar
  open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
  }
  // close side bar
  close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }

  UiSettings() {

    this._route.navigateByUrl("settings");
  }
  // delete expense
  uiDeleteEntry(data, rowNo) {

    this.expenseManagement.DeleteExpense(data);
    this.tempDeleteArray.push(data);
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





