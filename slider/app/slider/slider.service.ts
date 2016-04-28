import {Injectable} from 'angular2/core';
import {SliderImage} from './slider-image';
import {IMAGES} from './mock-data';

@Injectable()
export class SliderService {
  getImages() {
    return Promise.resolve(IMAGES);
  }
}

