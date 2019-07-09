import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { ExpenseComponent } from './expense/expense.component';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';

import { AppRoutingModule } from '../app/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent,
    HeaderComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
