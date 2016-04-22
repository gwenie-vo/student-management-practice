System.register(["angular2/core"], function(exports_1, context_1) {
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
            // declare var twttr: any;
            AppComponent = (function () {
                function AppComponent() {
                    this.lock = new Auth0Lock('atLbLHWAQbpHMdEhk02xp8TYYXE43dYo', 'huynhvo.auth0.com');
                    console.debug("Auth0Lock:", Auth0Lock);
                }
                AppComponent.prototype.login = function () {
                    var hash = this.lock.parseHash();
                    // console.log("this.lock:", this.lock);
                    this.lock.show({
                        connections: ['twitter', 'facebook', 'linkedin']
                    });
                    if (hash) {
                        if (hash.error)
                            console.log('There was an error logging in', hash.error);
                        else
                            this.lock.getProfile(hash.id_token, function (err, profile) {
                                if (err) {
                                    console.log(err);
                                    return;
                                }
                                localStorage.setItem('profile', JSON.stringify(profile));
                                localStorage.setItem('id_token', hash.id_token);
                            });
                    }
                };
                AppComponent.prototype.logout = function () {
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                };
                AppComponent.prototype.loggedIn = function () {
                    console.debug("loggedIn");
                    // return tokenNotExpired();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        // <h2 > Login by Facebook, Twitter, G + </h2>
                        // < a href= "#"(click) = "loginTest()" data- auto - logout - link="true" data- max - rows="1" data- size="medium" data- show - faces="true" > Login by Facebook< /a>
                        // < div id= "status" > </div>
                        template: "\n    <button (click)=\"login()\">Login</button>\n    <button (click)=\"logout()\">Logout</button>\n  "
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