import {Component} from 'angular2/core';
import {SliderComponent} from './slider/slider.component';


@Component({
  selector: 'my-app',
  // template: '<h1>My first Anglular 2 App</h1>'
  template: '<h1>My SECOND Angular 2 App</h1>',
  directive: [SliderComponent]
})

export class AppComponent {

}
