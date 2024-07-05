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

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  searchEmployeeById(): void {
    if (this.employeeId) {
      const id = parseInt(this.employeeId, 10);
      console.log("Fetching employee with ID:", id);

      this.employeeService.getEmployeeById(id).subscribe(
        response => {
          console.log("Response received:", response);
          this.employees = [response];
        },
        error => {
          console.error("Error fetching employee data:", error);
          this.errorMessage = 'Error fetching employee data';
        }
      );
    } else {
      this.getAllEmployees();
    }
  }

  getAllEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      employees => {
        console.log("All employees fetched:", employees);
        this.employees = employees;
      },
      error => {
        console.error("Error fetching all employees:", error);
        this.errorMessage = 'Error fetching all employees';
      }
    );
  }
}
