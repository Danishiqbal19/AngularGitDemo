import { Component } from '@angular/core';

@Component({
  selector: 'app-template-dirven-form',
  templateUrl: './template-dirven-form.component.html',
  styleUrls: ['./template-dirven-form.component.css']
})
export class TemplateDirvenFormComponent {
 save(form:any){
  console.log("form value",form.value)
 }
}
