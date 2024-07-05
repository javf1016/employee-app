import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeResponse } from '../models/employeeResponse';
import { EmployeesResponse } from '../models/employeesResponse';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private static readonly EXTERNAL_API_URL = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<EmployeesResponse> {
    return this.http.get<EmployeesResponse>(`${EmployeeService.EXTERNAL_API_URL}`);
  }

  getEmployeeById(id: number): Observable<EmployeeResponse> {
    return this.http.get<EmployeeResponse>(`${EmployeeService.EXTERNAL_API_URL}/${id}`);
  }
}
