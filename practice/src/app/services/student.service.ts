import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl: string = "http://localhost:3000/students";

  constructor(
    private http: HttpClient
  ) { }

  showAllStudent(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteStudent(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);
  }

  addStudent(student: Student): Observable<any> {
    return this.http.post(this.baseUrl, student);
  }

  getById(id: string): Observable<any> {
    return this.http.get(this.baseUrl+"/"+id);
  }

  updateStudent(id: string, student: Student): Observable<any>{
    return this.http.put(this.baseUrl+"/"+id, student);
  }
}
