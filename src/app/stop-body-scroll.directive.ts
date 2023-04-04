import { Directive } from '@angular/core';

@Directive({
  selector: '[StopBodyScroll]'
})
export class StopBodyScrollDirective {

  constructor() { }
  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
  }
  ngOnDestroy(): void {
    document.body.style.overflow = 'auto';
  }

}
