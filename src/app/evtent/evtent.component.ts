import { Component } from '@angular/core';

@Component({
  selector: 'app-evtent',
  templateUrl: './evtent.component.html',
  styleUrls: ['./evtent.component.css']
})
export class EvtentComponent {
  fname:string="";
  lname:string="";
  setmessage(e:any){
    this.fname=e.target.value;
  }

}
