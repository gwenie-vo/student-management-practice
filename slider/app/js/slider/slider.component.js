System.register(['angular2/core', './slider.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, slider_service_1;
    var SliderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (slider_service_1_1) {
                slider_service_1 = slider_service_1_1;
            }],
        execute: function() {
            SliderComponent = (function () {
                function SliderComponent(_sliderService) {
                    this._sliderService = _sliderService;
                    this.currentIdx = 0;
                }
                SliderComponent.prototype.ngOnInit = function () {
                    this.getImages();
                    this.autoSlide();
                };
                /*
                 * get images from mock-data by service
                 */
                SliderComponent.prototype.getImages = function () {
                    var _this = this;
                    this._sliderService.getImages().then(function (images) {
                        _this.images = images;
                    });
                };
                /*
                 * click next arrow to see the next image
                 */
                SliderComponent.prototype.slideNext = function () {
                    if (this.currentIdx < this.images.length - 1) {
                        this.currentIdx++;
                    }
                    else {
                        this.currentIdx = 0;
                    }
                };
                /*
                 * click prev arrow to see the previous image
                 */
                SliderComponent.prototype.slidePrev = function () {
                    console.log("current", this.currentIdx);
                    if (this.currentIdx > 0) {
                        this.currentIdx--;
                    }
                    else {
                        this.currentIdx = this.images.length - 1;
                    }
                };
                // auto slide every 3 seconds
                SliderComponent.prototype.autoSlide = function () {
                    var _this = this;
                    // console.log(this.images.length);
                    if (this.currentIdx < 8) {
                        setInterval(function () { _this.currentIdx++; }, 3000);
                    }
                };
                SliderComponent = __decorate([
                    core_1.Component({
                        selector: 'slider',
                        templateUrl: './app/slider/slider.component.html',
                        providers: [slider_service_1.SliderService]
                    }), 
                    __metadata('design:paramtypes', [slider_service_1.SliderService])
                ], SliderComponent);
                return SliderComponent;
            }());
            exports_1("SliderComponent", SliderComponent);
        }
    }
});
//# sourceMappingURL=slider.component.js.map