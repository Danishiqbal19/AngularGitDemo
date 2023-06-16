import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-databinding',
  templateUrl: './two-way-databinding.component.html',
  styleUrls: ['./two-way-databinding.component.css']
})
export class TwoWayDatabindingComponent {
  firstName:string="sam";
  counter:number=0;
  message:string="good morning";
  increment(){
    if(this.counter<10){
      this.counter++;
    }
  }
  decrement(){
    if(this.counter>0){
      this.counter--;
    }
  }
  display(){
    // console.log("hellow how are you");
    alert("hello")
  }
  //mouseover functionality
  changemessage(){
    this.message="welcome";
  }
  setName(e:any){
    console.log("event information ",e);
    console.log("entered value",e.target.value);
    this.firstName=e.target.value;
  }

}
