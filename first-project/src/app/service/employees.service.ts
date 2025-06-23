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

  getAllEmployees(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  addEmployee(employee: Employee): Observable<any> {
    return this.http.post(this.baseUrl, employee);
  }
}
