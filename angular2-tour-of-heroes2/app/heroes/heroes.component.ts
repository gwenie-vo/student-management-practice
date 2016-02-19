import { Component }          from 'angular2/core';
import { HeroListComponent }  from './hero-list.component';
@Component({
  selector: 'my-heroes',
  template: `
  <h2>Heroes</h2>
  <hero-list></hero-list>
  `,
  directives: [HeroListComponent]
})
export class HeroesComponent { }
