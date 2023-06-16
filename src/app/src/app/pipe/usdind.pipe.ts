import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdind'
})
export class UsdindPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [price]=args;
    return value*price;
  }

}
