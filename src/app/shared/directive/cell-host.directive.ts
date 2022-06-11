import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cellHost]'
})
export class CellHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
