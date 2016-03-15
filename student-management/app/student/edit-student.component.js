System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var EditStudentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            EditStudentComponent = (function () {
                // student: Student;
                function EditStudentComponent(_router, _routeParams) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                EditStudentComponent.prototype.ngOnInit = function () {
                    var id = this._routeParams.get('id');
                    console.log("student id:", id);
                };
                EditStudentComponent = __decorate([
                    core_1.Component({
                        template: "<h2>Edit Student Profile</h2>"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams])
                ], EditStudentComponent);
                return EditStudentComponent;
            }());
            exports_1("EditStudentComponent", EditStudentComponent);
        }
    }
});
//# sourceMappingURL=edit-student.component.js.map