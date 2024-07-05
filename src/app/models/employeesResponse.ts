import { Employee } from './employee';

 export interface EmployeesResponse {
    status: string;
    data: Employee[];
    message: string;
  }