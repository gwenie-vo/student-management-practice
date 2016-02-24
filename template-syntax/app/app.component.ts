import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <h3>
    {{title}}
    <img src="{{heroImageUrl}}" style="height:350px">
  </h3>
  <!-- "The sum of 1 + 1 is 2" -->
  <p>The sum of 1 + 1 is {{1 + 1}} + </p>

  <!-- "The sum of 1 + 1 is not 4" -->
  <p>The sum of 1 + 1 is not {{1 + 1 + " " + getVal()}}</p>
  <button [disabled]="isUnchanged">Save</button>
  `
})

export class AppComponent {
  public heroImageUrl = "http://ww1.prweb.com/prfiles/2014/04/10/11752526/gI_134971_best-image-web-hosting.png";
  public tittle = "Template syntax";
  getVal() {
    return "Message";
  }
}
