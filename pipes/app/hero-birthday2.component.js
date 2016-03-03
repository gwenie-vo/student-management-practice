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
    var HeroBirthday;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeroBirthday = (function () {
                function HeroBirthday() {
                    this.birthday = new Date(1988, 3, 15); // April 15, 1988
                    this.toggle = true; // start with true == shortDate
                }
                Object.defineProperty(HeroBirthday.prototype, "format", {
                    get: function () { return this.toggle ? 'shortDate' : 'fullDate'; },
                    enumerable: true,
                    configurable: true
                });
                HeroBirthday.prototype.toggleFormat = function () { this.toggle = !this.toggle; };
                HeroBirthday = __decorate([
                    core_1.Component({
                        selector: 'hero-birthday',
                        template: "\n    <p>The hero's birthday is {{ birthday | date:format }}</p>\n    <button (click)=\"toggleFormat()\">Toggle Format</button>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroBirthday);
                return HeroBirthday;
            }());
            exports_1("HeroBirthday", HeroBirthday);
        }
    }
});
//# sourceMappingURL=hero-birthday2.component.js.map