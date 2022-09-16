import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //private _url: string = "/assets/data/employees.json";
  //private _url: string = "https://jsonplaceholder.typicode.com/users";
  private _url: string = "https://dummyapi.io/data/v1/user";

  getEmployeeList() : Observable<IEmployee[]>{
  //  return [
  //     {"id": 1, "name": "Mark", "age": 27},
  //     {"id": 2, "name": "Sam", "age": 22},
  //     {"id": 3, "name": "John", "age": 25},
  //     {"id": 4, "name": "Tom", "age": 34}
  //   ];

  // const myHeaders = new HttpHeaders({

  //   'app-id' : '630a758491b126acb900b768'
  // });

  // const myParams = new HttpParams()
  // .set('page', '1')
  // .set('limit', '10');


  //return this.http.get<IEmployee[]>(this._url, {headers: myHeaders, params: myParams});
  return this.http.get<IEmployee[]>(this._url);
  }


  constructor(private http : HttpClient) { }
}
