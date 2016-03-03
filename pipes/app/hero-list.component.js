System.register(['angular2/core', './fetch-json.pipe'], function(exports_1, context_1) {
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
    var core_1, fetch_json_pipe_1;
    var HeroListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (fetch_json_pipe_1_1) {
                fetch_json_pipe_1 = fetch_json_pipe_1_1;
            }],
        execute: function() {
            HeroListComponent = (function () {
                function HeroListComponent() {
                }
                HeroListComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-list',
                        template: "\n    <h4>Heroes from JSON File</h4>\n\n    <div *ngFor=\"#hero of ('heroes.json' | fetch) \">\n      {{hero.name}}\n    </div>\n\n    <p>Heroes as JSON:\n    {{'heroes.json' | fetch | json}}\n    </p>\n  ",
                        pipes: [fetch_json_pipe_1.FetchJsonPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroListComponent);
                return HeroListComponent;
            }());
            exports_1("HeroListComponent", HeroListComponent);
        }
    }
});
//# sourceMappingURL=hero-list.component.js.map