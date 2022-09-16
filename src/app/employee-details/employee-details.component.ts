import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public response: Object = {};
  public employeeList:any = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployeeList()
      .subscribe(data => {
        this.response = data;
        this.employeeList = Object.values(this.response)[0];
        console.log(Object.values(this.response)[0]);
        console.log(this.response);
      });
      
  }

}
