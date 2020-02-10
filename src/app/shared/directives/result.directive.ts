import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[result]',
})
export class ResultDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}