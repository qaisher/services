import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";

  getEmployeeList() : Observable<IEmployee[]>{
  //  return [
  //     {"id": 1, "name": "Mark", "age": 27},
  //     {"id": 2, "name": "Sam", "age": 22},
  //     {"id": 3, "name": "John", "age": 25},
  //     {"id": 4, "name": "Tom", "age": 34}
  //   ];
  return this.http.get<IEmployee[]>(this._url);
  }


  constructor(private http : HttpClient) { }
}
