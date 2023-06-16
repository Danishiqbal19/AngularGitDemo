import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value:any, gender:string){
    if(gender.toLowerCase()=='male'){
      return "Mr"+" "+value;
    }
    else{
      return "Miss"+" "+value
    }
  }
}
