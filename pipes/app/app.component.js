System.register(['angular2/core', './hero-async-message.component', './hero-birthday2.component', './hero-list.component', './power-booster.component', './power-boost-calculator.component'], function(exports_1, context_1) {
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
    var core_1, hero_async_message_component_1, hero_birthday2_component_1, hero_list_component_1, power_booster_component_1, power_boost_calculator_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_async_message_component_1_1) {
                hero_async_message_component_1 = hero_async_message_component_1_1;
            },
            function (hero_birthday2_component_1_1) {
                hero_birthday2_component_1 = hero_birthday2_component_1_1;
            },
            function (hero_list_component_1_1) {
                hero_list_component_1 = hero_list_component_1_1;
            },
            function (power_booster_component_1_1) {
                power_booster_component_1 = power_booster_component_1_1;
            },
            function (power_boost_calculator_component_1_1) {
                power_boost_calculator_component_1 = power_boost_calculator_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.birthday = new Date(1988, 3, 15); // April 15, 1988
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [
                            hero_async_message_component_1.HeroAsyncMessageComponent,
                            hero_birthday2_component_1.HeroBirthday,
                            hero_list_component_1.HeroListComponent,
                            power_booster_component_1.PowerBooster, power_boost_calculator_component_1.PowerBoostCalculator
                        ]
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