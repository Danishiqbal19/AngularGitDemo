import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDynamicStyle]'
})
export class DynamicStyleDirective {

  constructor(private el:ElementRef,private ren:Renderer2) {
  //  this.el.nativeElement.innerText="this is paragraph element";
  //   this.el.nativeElement.style.color="red";
  //   this.el.nativeElement.style.border="1px solid blue"
  // this.ren.setStyle(this.el.nativeElement,'color','red');
  this.ren.setStyle(this.el.nativeElement,'border','1px solid red');
  this.ren.setProperty(this.el.nativeElement,'innerText','this is the paragraph text');
  this.ren.addClass(this.el.nativeElement,'customStyle');
  setTimeout(()=>{
    this.ren.removeClass(this.el.nativeElement,'customStyle');
  },5000);

  
  
 

   }

}
