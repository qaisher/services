import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  public employeeList:any = [];
  public response: Object = {};
  
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
