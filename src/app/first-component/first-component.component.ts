import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  message:string="good morning";
  FirstName:string="sam";
  LastName:string="john";
  age:number=30;
  address:string="address";
  isDisable:boolean=false;
  todaysdate=new Date();
  value:number=2000;
  getmessage(){
    alert("good morning");
  }
  setmessage(){
    console.log("hello");
  }
  setting(){

  }

}
