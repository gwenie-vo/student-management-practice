System.register(['angular2/core', 'angular2/http', './wikipedia.service'], function(exports_1, context_1) {
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
    var core_1, http_1, wikipedia_service_1;
    var WikiComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (wikipedia_service_1_1) {
                wikipedia_service_1 = wikipedia_service_1_1;
            }],
        execute: function() {
            WikiComponent = (function () {
                function WikiComponent(_wikipediaService) {
                    this._wikipediaService = _wikipediaService;
                }
                WikiComponent.prototype.search = function (term) {
                    var _this = this;
                    this._wikipediaService.search(term).subscribe(function (data) {
                        console.log("DATA:", data);
                        var dataJson = data.json();
                        if (dataJson && dataJson.query) {
                            _this.items = dataJson.query.search;
                        }
                        else {
                            _this.items = [];
                        }
                    });
                };
                WikiComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"container\">\n      <h1>Wikipedia Search Practice</h1>\n\n      <p><i>Press button to search</i></p>\n\n      <input #term />\n\n      <button (click)=\"search(term.value)\" type=\"button\" class=\"btn btn-default\">Search</button>\n\n      <ul>\n        <li *ngFor=\"#item of items\">\n          {{item.title}}\n          <pre>{{item.snippet}}</pre>\n        </li>\n      </ul>\n    </div>\n  ",
                        providers: [http_1.JSONP_PROVIDERS, wikipedia_service_1.WikipediaService],
                        styles: ["\n    .container {\n      width: 80%;\n      margin: 0 auto;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [wikipedia_service_1.WikipediaService])
                ], WikiComponent);
                return WikiComponent;
            }());
            exports_1("WikiComponent", WikiComponent);
        }
    }
});
//# sourceMappingURL=wiki.component.js.map