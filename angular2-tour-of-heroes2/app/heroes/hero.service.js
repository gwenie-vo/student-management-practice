System.register(['angular2/score', './mock-heroes', './logger.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var score_1, mock_heroes_1, logger_service_1;
    var HeroService;
    return {
        setters:[
            function (score_1_1) {
                score_1 = score_1_1;
            },
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService(_logger) {
                    this._logger = _logger;
                }
                HeroService.prototype.getHeroes = function () {
                    this._logger.log('Getting heroes ...');
                    return mock_heroes_1.HEROES;
                };
                HeroService = __decorate([
                    score_1.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_1.Logger])
                ], HeroService);
                return HeroService;
            })();
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map