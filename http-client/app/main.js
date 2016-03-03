System.register(['angular2/platform/browser', 'rxjs/Rx', './wiki/wiki.component', './wiki/wiki-smart.component', './toh/toh.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, wiki_component_1, wiki_smart_component_1, toh_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (_1) {},
            function (wiki_component_1_1) {
                wiki_component_1 = wiki_component_1_1;
            },
            function (wiki_smart_component_1_1) {
                wiki_smart_component_1 = wiki_smart_component_1_1;
            },
            function (toh_component_1_1) {
                toh_component_1 = toh_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(wiki_component_1.WikiComponent);
            browser_1.bootstrap(wiki_smart_component_1.WikiSmartComponent);
            browser_1.bootstrap(toh_component_1.TohComponent);
        }
    }
});
//# sourceMappingURL=main.js.map