import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
  selector: '[myHightlight]'
})

export class HighlightDirective {
  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
