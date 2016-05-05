import {Component} from 'angular2/core';
import {SliderComponent} from './slider/slider.component';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <slider></slider>
   `,
  directives: [SliderComponent]
})

export class AppComponent {
  title: "Slider Component";
}
