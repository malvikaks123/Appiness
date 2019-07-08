import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dictionaryService: ExpenseService) { }
  bookmarkCount: Number = 0;
  getCount() {
    return this.dictionaryService.getExpenseData().length
  }
  ngOnInit() {

  }

}
