import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../model/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  baseUrl: string = "http://localhost:3000/locations";

  constructor(private http: HttpClient) { }

  // To Get All locations
  getAlllocations(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // To Add New location
  addlocation(location: Location): Observable<any> {
    return this.http.post(this.baseUrl, location);
  }

  // To Delete location
  deletelocation(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);
  }

  // To Find location By ID
  getById(id: string): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id);
  }

  // To Update location By Id
  updatelocation(id: string, location: Location): Observable<any> {
    return this.http.put(this.baseUrl + "/" + id, location);
  }
}


