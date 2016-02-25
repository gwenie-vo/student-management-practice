System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.heroImageUrl = "http://ww1.prweb.com/prfiles/2014/04/10/11752526/gI_134971_best-image-web-hosting.png";
                    this.tittle = "Template syntax";
                }
                AppComponent.prototype.toggleSelected = function () {
                    this.isSelected = !this.isSelected;
                    console.log("this.isSelected:", this.isSelected);
                };
                AppComponent.prototype.getVal = function () {
                    var a = 40 + 4, b = "Text string";
                    return "Message";
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <h3>\n    {{title}}\n    <img src=\"{{heroImageUrl}}\" style=\"height:350px\">\n  </h3>\n  <!-- \"The sum of 1 + 1 is 2\" -->\n  <p>The sum of 1 + 1 is {{1 + 1}} + </p>\n\n  <!-- \"The sum of 1 + 1 is not 4\" -->\n  <p>The sum of 1 + 1 is not {{2 + 2 + \" \" + getVal()}}</p>\n  <button (click)=\"toggleSelected()\">Save</button>\n  <div id=\"testNgClass1\" [ngClass] = \"{selected: isSelected, huynh: !isSelected, abc: !isSelected}\">1</div>\n  <div class=\"abc\" [class.trung]=\"isSelected\"></div>\n  <button [title]=\"tittle\">help</button>\n\n<!-- isSpecial is true -->\n<div [class.hidden]=\"!isSpecial\">Show with class</div>\n<div [class.hidden]=\"isSpecial\">Hide with class</div>\n\n<!-- HeroDetail is in the DOM but hidden -->\n<hero-detail [class.hidden]=\"isSpecial\"></hero-detail>\n\n<div [style.display]=\"isSpecial ? 'block' : 'none'\">Show with style</div>\n<div [style.display]=\"isSpecial ? 'none'  : 'block'\">Hide with style</div>\n\n<span [ngSwitch]=\"toeChoice\">\n  <span *ngSwitchWhen=\"'Eenie'\">Eenie</span>\n  <span *ngSwitchWhen=\"'Meanie'\">Meanie</span>\n  <span *ngSwitchWhen=\"'Miney'\">Miney</span>\n  <span *ngSwitchWhen=\"'Moe'\">Moe</span>\n  <span *ngSwitchDefault>other</span>\n</span>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map