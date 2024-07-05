import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';

export const routes: Routes = [
  { path: 'employee-search', component: EmployeeSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
