System.register(['angular2/platform/browser'], function(exports_1) {
    var browser_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            // Injecting services in bootstrap works but is discouraged
            browser_1.bootstrap(AppComponent, [HeroService]);
        }
    }
});
//# sourceMappingURL=main.js.map