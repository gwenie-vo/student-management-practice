import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
  selector: '[myHighLight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})

export class HighLightDirective {

  // @Input() myHighLight: string;

  constructor(private el: ElementRef){}

  private _highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  onMouseEnter() { this._highlight('#f2dede');}
  onMouseLeave() { this._highlight(null); }
}


