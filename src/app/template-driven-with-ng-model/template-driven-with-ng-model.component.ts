import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-with-ng-model',
  templateUrl: './template-driven-with-ng-model.component.html',
  styleUrls: ['./template-driven-with-ng-model.component.css']
})
export class TemplateDrivenWithNgModelComponent {
  signUpForm:signUp=new signUp();
save(){
  console.log(this.signUpForm);

}


}
export class signUp{
  firstname:string="";
  lastname:string="";
  dateofbirth:string="";
  age:number=0;
  mobileno:number=0;
  emailid:string="";
  passward:number=0;

}


