import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-databinding',
  templateUrl: './one-way-databinding.component.html',
  styleUrls: ['./one-way-databinding.component.css']
})
export class OneWayDatabindingComponent {
  isDisabled:boolean=false;
firstName:string="tom";
informationObj:any={
  productName:"washingmachine",
  productId:2,
  price:41000,
  rating:5

}
applicationInfo:any={
  applicationName:"flipkart",
  logo:"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg"
}
obj:any={
  firstname:"sam",
  lastname:"john",
  age:23,
  address:{
    city:"mumbai",
    pincode:444323,
    state:"maharashtra"
  }
}


}
