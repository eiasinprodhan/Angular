import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseUrl: string = "http://localhost:3000/employees";

  constructor(private http: HttpClient) { }

  // To Get All Employees
  getAllEmployees(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // To Add New Employee
  addEmployee(employee: Employee): Observable<any> {
    return this.http.post(this.baseUrl, employee);
  }

  // To Delete Employee
  deleteEmployee(id: string): Observable<any>{
    return this.http.delete(this.baseUrl+"/"+id);
  }

  // To Find Employee By ID
  getById(id: string): Observable<any>{
    return this.http.get(this.baseUrl+"/"+id);
  }

  // To Update Employee By Id
  updateEmployee(id: string, employee: Employee): Observable<any>{
    return this.http.put(this.baseUrl+"/"+id, employee);
  }
}
