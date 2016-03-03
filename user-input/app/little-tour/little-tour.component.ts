import {Component} from 'angular2/core';

@Component({
  selector: 'little-tour',
  templateUrl: 'app/little-tour/little-tour.component.html'
})

export class LittleTourComponent {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero:string) {
    if(newHero) {
    this.heroes.push(newHero);
    }
  }
}
