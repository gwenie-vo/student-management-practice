interface Hero {
  id: number;
  name: string;
}

import {Component} from 'angular2/core';
@Component({
  selector: 'my-app',
  // template: '<h1>My first Anglular 2 App</h1>'
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <div>
      <input [(ngModel)]="hero.name" placeholder="name">
     </div>
  `
})

export class AppComponent {
  public title = 'Tour of Heroes';
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
};

