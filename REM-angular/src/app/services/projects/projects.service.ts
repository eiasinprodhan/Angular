import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  baseUrl: string = "http://localhost:3000/projects";
  
  constructor(
    private http: HttpClient
  ) { }

  viewProjects(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
}
