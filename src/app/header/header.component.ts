import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  uiallocated_Budget: any = this.expenseData.updateBudget;
  constructor(private expenseData: ExpenseService, private _route: Router) { }

  ngOnInit() {
    this.close();
    this.uiallocated_Budget = this.expenseData.updateBudget

    this.expenseData.expenseUodateEvent.subscribe((data) => {
      this.uiallocated_Budget = data;
    })
  }
  updateBudget() {
    this.uiallocated_Budget = this.expenseData.updateBudget
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
    this.close();
  }
  UiHome() {
    this._route.navigateByUrl("expense");
    this.close();
  }
}
