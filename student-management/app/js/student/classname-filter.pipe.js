System.register(['angular2/core'], function(exports_1, context_1) {
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
    var ClassNameFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ClassNameFilterPipe = (function () {
                function ClassNameFilterPipe() {
                }
                ClassNameFilterPipe.prototype.transform = function (students, args) {
                    console.debug("students:", students);
                    console.debug("args:", args);
                    // let className = null;
                    // if (args && args.length > 0){
                    //   className = args[0];
                    // }
                    //
                    //get the first value of array
                    var className = args[0];
                    if (className && students) {
                        // Filter
                        students = students.filter(function (student) {
                            return student.class === className;
                        });
                    }
                    return students;
                };
                ClassNameFilterPipe = __decorate([
                    core_1.Pipe({ name: 'classNameFilter' }), 
                    __metadata('design:paramtypes', [])
                ], ClassNameFilterPipe);
                return ClassNameFilterPipe;
            }());
            exports_1("ClassNameFilterPipe", ClassNameFilterPipe);
        }
    }
});
//# sourceMappingURL=classname-filter.pipe.js.map