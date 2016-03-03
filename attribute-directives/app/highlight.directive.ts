import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
  selector: '[myHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})

export class HighlightDirective {
  // constructor(el:ElementRef) {
  //   el.nativeElement.style.backgroundColor = 'yellow';
  // }
  @Input('myHighlight') highlightColor: string;

  @Input() set defaultColor(colorName: string){
    this._defaultColor = colorName || this._defaultColor;
  }

  private _highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  private _defaultColor = 'red';

  constructor(private el:ElementRef) {}

  onMouseEnter() { this._highlight(this.highlightColor || this._defaultColor);}
  onMouseLeave() { this._highlight(null);}
}
