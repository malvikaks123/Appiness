import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExpenseComponent } from './expense/expense.component';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [
    { path: 'settings', component: SettingsComponent },
    { path: '', component: ExpenseComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    //imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
