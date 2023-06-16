import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-component',
  templateUrl: './practice-component.component.html',
  styleUrls: ['./practice-component.component.css']
})
export class PracticeComponentComponent implements OnInit{
  dateofbirth:string="";
  age:number=0;
  date=new Date();
  states:string[]=[];
  cities:string[]=[];
  ngOnInit():void{
    this.states=Object.keys(this.statesObj);
  }
  getcites(){
    this.cities=this.statesObj[this.signupform.state];
  }

  signupform:signUp=new signUp();
  statesObj:any={
    "maharashtra":["mumbai",'pune',"akola","aurangabad","nanded"],
    "karnataka":["bengluru","mehsoor","bijapur"],
    "rajestan":["ajmer","jaipur","jodhpur"]
  }
  calculateage() {
    if (this.dateofbirth) {
      var timeDiff = Math.abs(Date.now() - new Date(this.dateofbirth).getTime());
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
      console.log(this.age);
    }


  }
  
}
export class signUp{
  firstname!:string;
  lastname!:string;
  mobileNo!:number;
  email!:string;
  address!:string;
  state!:string;
  city!:string;
  age!:number;
  dateofbirth!:string




}