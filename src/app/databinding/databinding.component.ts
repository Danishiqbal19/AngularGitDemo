import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  firstName:string="";
  lastName:string="";
  getfirstName(e:any){
    this.firstName=e.target.value;
  }

}
