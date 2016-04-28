import {Component, OnInit} from 'angular2/core';
import {SliderService} from './slider.service';
import {SliderImage} from './slider-image';

@Component({
  selector: 'slider',
  templateUrl: './app/slider/slider.component.html',
  providers: [SliderService]
})

export class SliderComponent implements OnInit {
  images: SliderImage[];
  constructor(private _sliderService: SliderService) {}

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    console.log("RS:", this._sliderService.getImages());
    this._sliderService.getImages().then(images => {
      this.images = images
      console.log("Images", this.images);
   });

  }
}


