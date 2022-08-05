import { Component, OnInit } from '@angular/core';
import { CompanyEmployeesService } from '../company-employees.service';

@Component({
  selector: 'app-employment-detail',
  templateUrl: './employment-detail.component.html',
  styleUrls: ['./employment-detail.component.css']
})
export class EmploymentDetailComponent implements OnInit {

  public companyDetails:any = [];
  constructor(private _company:CompanyEmployeesService) { }

  ngOnInit(): void {
    this.companyDetails = this._company.getCompanyDetails();
  }

}
