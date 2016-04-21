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
            AppComponent = (function () {
                function AppComponent() {
                }
                /*
                 * Load the app with appId
                 */
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    FB.init({
                        appId: '1586800451610753',
                        cookie: true,
                        xfbml: true,
                        version: 'v2.5' // use graph api version 2.5
                    });
                    FB.getLoginStatus(function (response) {
                        _this.statusChangeCallback(response);
                    });
                    console.log("INit");
                    twttr.anywhere(function (T) {
                        console.log("token0:", T);
                        T.bind("authComplete", function (e, user) {
                            var token = user.attributes._identity;
                            console.log("token:", token);
                            //define the login function on your client through Twitter
                        });
                    });
                };
                /*
                 * show login form popup
                 */
                AppComponent.prototype.loginTest = function () {
                    var _this = this;
                    // console.debug('loginTest');
                    FB.login(function (response) {
                        _this.checkLoginState();
                    });
                };
                /*
                 * call the check response Login status function
                 */
                AppComponent.prototype.checkLoginState = function () {
                    var _this = this;
                    FB.getLoginStatus(function (response) {
                        _this.statusChangeCallback(response);
                    });
                };
                /*
                 * function check status
                 */
                AppComponent.prototype.statusChangeCallback = function (response) {
                    // console.log(response);
                    console.log("RESPONSEEEEEEEEEEEEE", response.status);
                    if (response.status === 'connected') {
                        // Logged into your app and Facebook.
                        this.testAPI();
                    }
                    else if (response.status === 'not_authorized') {
                        document.getElementById('status').innerHTML = 'Please log ' +
                            'into this app.';
                    }
                    else {
                        // The person is not logged into Facebook, so we're not sure if
                        // they are logged into this app or not.
                        document.getElementById('status').innerHTML = 'Please log ' + 'into Facebook.';
                    }
                };
                /*
                 * show user's info
                 */
                AppComponent.prototype.testAPI = function () {
                    // console.log('Welcome!  Fetching your information.... ');
                    FB.api('/me', function (response) {
                        // console.log('Successful login for: ' + response.name);
                        document.getElementById('status').innerHTML =
                            'Thanks for logging in, ' + response.name + '!' + 'This is your ID: ' + response.id;
                    });
                };
                //describe the login actions
                //function we link to the click on the custom login button through Twitter
                AppComponent.prototype.doTWSignIn = function () {
                    twttr.anywhere(function (T) {
                        console.log("doTWSignIn:", T);
                        T.signIn();
                        T.bind("authComplete", function (e, user) {
                            var token = user.attributes._identity;
                            console.log("token2:", token);
                            //define the login function on your client through Twitter
                        });
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: "\n    <h2>Login by Facebook, Twitter, G+</h2>\n    <a href=\"#\" (click)=\"loginTest()\" data-auto-logout-link=\"true\" data-max-rows=\"1\" data-size=\"medium\" data-show-faces=\"true\">Login by Facebook</a>\n\n    <a href=\"#\" (click)=\"doTWSignIn()\">Login by Twitter</a>\n    <div id=\"status\"></div>\n  "
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