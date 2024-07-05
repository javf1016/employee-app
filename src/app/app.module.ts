import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; // Asegúrate de importar RouterModule

import { AppComponent } from './app.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeService } from './services/employee.service';

const routes: Routes = [
  { path: '', component: EmployeeSearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) // Asegúrate de importar las rutas
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
