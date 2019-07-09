import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: any = {}
  constructor(private expenseManagement: ExpenseService, private _route: Router) { }

  ngOnInit() {
    this.settings = {
      "Budget": null,
      "category": ""
    }
  }
  UiUpdateCategory() {
    this.expenseManagement.updateCategory(this.settings.category);
    this._route.navigateByUrl('');
  }

  UiBudget() {
    this.expenseManagement.updateBudget = this.settings.Budget;
    this.expenseManagement.expenseUodateEvent.emit(this.settings.Budget);
    this._route.navigateByUrl('');
  }
}
