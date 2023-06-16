import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  
  counter:number=0;
  property:string="";
  message:string="good morning";
  met(){
    alert("hello developer")
  }
  increment(){
    if(this.counter<6){
     this.counter++
    }
  }
  decrement(){
    if(this.counter>1){
      this.counter--;
    }
  }
 
  

}
