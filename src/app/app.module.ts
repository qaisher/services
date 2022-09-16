import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';
import { CompaniesComponent } from './companies/companies.component';
import { EmploymentDetailComponent } from './employment-detail/employment-detail.component';
import { CompanyEmployeesService } from './company-employees.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonInterceptor } from './common.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    CompaniesComponent,
    EmploymentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService, CompanyEmployeesService, {provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
