import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Component({
  selector: 'hero-list',
  template: `
  <div *ngFor="#hero of heroes">
    {{hero.id}} - {{hero.name}}
  </div>
  `
})

export class HeroListComponent {
  // heroes = HEROES;
  heroes: Hero[];

  /*
  need explain this
   */
  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }
}


