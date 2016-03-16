System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var StudentService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            //Inject Http service
            StudentService = (function () {
                function StudentService(http) {
                    this.http = http;
                    this._studentUrl = 'app/student/student.json'; //URL to JSON file
                }
                StudentService.prototype.getStudent = function () {
                    // console.debug("TEST:", this.http.get(this._studentUrl));
                    return this.http.get(this._studentUrl)
                        .map(function (res) {
                        return res.json().data;
                    });
                };
                // find a student has id === currentStudent id
                StudentService.prototype.findStudentById = function (id) {
                    var student = null;
                    return this.getStudent().map(function (students) {
                        for (var i = 0; i < students.length; i++) {
                            if (students[i].id === id) {
                                student = students[i];
                            }
                        }
                        return student;
                    });
                };
                StudentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], StudentService);
                return StudentService;
            }());
            exports_1("StudentService", StudentService);
        }
    }
});
//# sourceMappingURL=student.service.js.map