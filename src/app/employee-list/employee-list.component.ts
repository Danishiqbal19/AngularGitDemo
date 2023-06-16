import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employeeList:any=[
    {employeeid:55,employeename:"sam",EmployeeDesignation:"angulardeveloper",gender:"male",salary:50000,country:"usa"},
    {employeeid:56,employeename:"john",EmployeeDesignation:"java developer",gender:"female",salary:60000,country:"UK"},
    {employeeid:57,employeename:"toM",EmployeeDesignation:"angulardeveloper",gender:"female",salary:70000,country:"london"},
    {employeeid:58,employeename:"chio",EmployeeDesignation:"UI developer",gender:"male",salary:40000,country:"africa"}
  ]


}
