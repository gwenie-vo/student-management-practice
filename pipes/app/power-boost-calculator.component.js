System.register(['angular2/core', './exponential-strength.pipe'], function(exports_1, context_1) {
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
    var core_1, exponential_strength_pipe_1;
    var PowerBoostCalculator;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (exponential_strength_pipe_1_1) {
                exponential_strength_pipe_1 = exponential_strength_pipe_1_1;
            }],
        execute: function() {
            PowerBoostCalculator = (function () {
                function PowerBoostCalculator() {
                    this.power = 5;
                    this.factor = 1;
                }
                PowerBoostCalculator = __decorate([
                    core_1.Component({
                        selector: 'power-boost-calculator',
                        template: "\n    <h2>Power Boost Calculator</h2>\n    <div>Normal power: <input [(ngModel)]=\"power\"></div>\n    <div>Boost factor: <input [(ngModel)]=\"factor\"></div>\n    <p>\n      Super Hero Power: {{power | exponentialStrength: factor}}\n    </p>\n  ",
                        pipes: [exponential_strength_pipe_1.ExponentialStrengthPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PowerBoostCalculator);
                return PowerBoostCalculator;
            }());
            exports_1("PowerBoostCalculator", PowerBoostCalculator);
        }
    }
});
//# sourceMappingURL=power-boost-calculator.component.js.map