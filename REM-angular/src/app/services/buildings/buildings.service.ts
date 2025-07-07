import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Buildings } from '../../model/building.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {

  baseUrl: string = "http://localhost:3000/buildings";

  constructor(
    private http: HttpClient
  ){}

  viewBuildings(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
}
