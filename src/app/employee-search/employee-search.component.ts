import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {
  employeeId: string = '';
  employees: Employee[] = [];
  errorMessage: string = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      response => this.employees = response.data,
      error => this.errorMessage = 'Error fetching employee data'
    );
  }

  searchEmployeeById(): void {
    if (this.employeeId) {
      const id = parseInt(this.employeeId, 10);
      this.employeeService.getEmployeeById(id).subscribe(
        response => this.employees = [response.data],
        error => this.errorMessage = 'Error fetching employee data'
      );
    } else {
      this.getAllEmployees();
    }
  }
}
