import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-driven-form',
  templateUrl: './reactive-driven-form.component.html',
  styleUrls: ['./reactive-driven-form.component.css']
})
export class ReactiveDrivenFormComponent implements OnInit  {
  signUpForm!:FormGroup
  constructor(){

  }
  ngOnInit(): void {
    this.createRegistrationForm();

  }
  createRegistrationForm(){
    this.signUpForm=new FormGroup({
      "firstname":new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(5),Validators.pattern("[a-zA-Z]{3,5}")]),
      "lastname":new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(5),Validators.pattern("[a-zA-Z]{3,5}")]),
      "mobilenumber":new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[7-9][0-9]{9,9}")]),
      "gender":new FormControl('',[Validators.required]),
      "email":new FormControl('',[Validators.required,Validators.pattern("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$")]),
      "address":new FormGroup({
        "line1":new FormControl('',[]),
        "line2":new FormControl('',[]),
        "city":new FormControl('',[]),
        "state":new FormControl('',[]),


      })


    })

  }
  save(){
    console.log("form value",this.signUpForm.value)

  }
 get firstname(){
  return this.signUpForm.controls['firstname'];
 }
}