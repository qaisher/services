import { Component, OnInit } from '@angular/core';
import { CompanyEmployeesService } from '../company-employees.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  public companyDetails: any = [];
  constructor(private _company:CompanyEmployeesService) { }

  ngOnInit(): void {
    this.companyDetails = this._company.getCompanyDetails();
  }

}
