import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeComponent} from './employee.component';
import {EmployeedetailComponent} from './employeedetail/employeedetail.component';


@NgModule({
  declarations: [EmployeeComponent, EmployeedetailComponent],
  imports: [
    CommonModule
  ],
  exports: [EmployeeComponent]
})
export class EmployeeModule {
}
