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
  currentIdx = 0;

  constructor(private _sliderService: SliderService) {}

  ngOnInit() {
    this.getImages();
    this.autoSlide();
  }

  /*
   * get images from mock-data by service
   */
  getImages() {
    this._sliderService.getImages().then(images => {
    this.images = images;
   });
  }

  /*
   * click next arrow to see the next image
   */
  slideNext() {
    if (this.currentIdx < this.images.length - 1) {
      this.currentIdx++;
    } else {
      this.currentIdx = 0;
    }
  }

  /*
   * click prev arrow to see the previous image
   */
  slidePrev() {
    console.log("current", this.currentIdx)
    if (this.currentIdx > 0) {
      this.currentIdx--;
    } else {
      this.currentIdx = this.images.length-1;
    }
  }

  // auto slide every 3 seconds
  autoSlide() {
    setInterval( () => {this.currentIdx++}, 3000);
  }
}
