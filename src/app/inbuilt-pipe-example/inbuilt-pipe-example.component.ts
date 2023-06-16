import { Component } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipe-example',
  templateUrl: './inbuilt-pipe-example.component.html',
  styleUrls: ['./inbuilt-pipe-example.component.css']
})
export class InbuiltPipeExampleComponent {
  message:string="welcome to our website";
  details:string="this website contain the information about the pipe "
  todaysdate=new Date();
  salary:number=45000;
  average:number=4500.2546;

}
