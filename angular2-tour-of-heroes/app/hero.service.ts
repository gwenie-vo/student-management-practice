// we import the mock HEROES and
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
  //Add a getHeroes method stub.
  getHeroes(){
    // return it from the getHeroes method.
    return HEROES;
  }
}
