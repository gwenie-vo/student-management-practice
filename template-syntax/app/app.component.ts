import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <h3>
    {{title}}
    <img src="{{heroImageUrl}}" style="height:350px">
  </h3>

  `
})

export class AppComponent {
  public heroImageUrl = "http://ww1.prweb.com/prfiles/2014/04/10/11752526/gI_134971_best-image-web-hosting.png";
  public tittle = "Template syntax";
}
