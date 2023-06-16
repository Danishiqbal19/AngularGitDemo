import { Component } from '@angular/core';

@Component({
  selector: 'app-evenodd',
  templateUrl: './evenodd.component.html',
  styleUrls: ['./evenodd.component.css']
})
export class EvenoddComponent {
employeeList:Employee[]=[];
constructor(){
  this.createEmployeeList();
}
createEmployeeList(){
  var empl1 = new Employee("101","Sam","Software Developer",50000,"USA");
  var empl2 = new Employee("102","Tom","QA",65000,"UK");
  var empl3 = new Employee("103","Mike","Java Developer",70000,"USA");
  var empl4 = new Employee("104","Raj","Angular Developer",40000,"India");
  var empl5 = new Employee("105","David","Business Analyst",60000,"UK");
  this.employeeList.push(empl1,empl2,empl3,empl4,empl5);
  console.log(this.employeeList);

}
}
class Employee{
  employeeId:string;
  employeeName:string;
  designation:string;
  salary:number;
  country:string;
  constructor(employeeId:string,employeeName:string,designation:string,salary:number,country:string){
    this.employeeId=employeeId;
    this.employeeName=employeeName;
    this.designation=designation;
    this.salary=salary;
    this.country=country;
  }
}
