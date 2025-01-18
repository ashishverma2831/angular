import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'red';

  constructor(public eRef:ElementRef) {
    this.eRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'green';
  }

}
