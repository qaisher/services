import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyEmployeesService {

  constructor() { }

  getCompanyDetails(){
    return [
      {"id": 1, "company": "Dell", "strength": 400},
      {"id": 2, "company": "HP", "strength": 250},
      {"id": 3, "company": "Lenovo", "strength": 300}
    ]
  }
}
