System.register(['angular2/core', 'angular2/router', './student.service', './student'], function(exports_1, context_1) {
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
    var core_1, router_1, student_service_1, student_1;
    var StudentFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            },
            function (student_1_1) {
                student_1 = student_1_1;
            }],
        execute: function() {
            StudentFormComponent = (function () {
                function StudentFormComponent(_router, _routeParams, _studentService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._studentService = _studentService;
                    this.student = new student_1.Student();
                    this.classes = null;
                }
                StudentFormComponent.prototype.ngOnInit = function () {
                    //get id from URL
                    var id = this._routeParams.get('id');
                    console.log("student id:", id);
                    // if there's an id then we get student by that Id and bind to the form
                    if (id) {
                        this.getStudentById(id);
                    }
                    this.getClasses();
                };
                StudentFormComponent.prototype.getClasses = function () {
                    var _this = this;
                    this._studentService.getClasses().subscribe(function (classes) {
                        _this.classes = classes;
                        console.log("CLASSSSSSSSSSS", classes);
                    });
                };
                StudentFormComponent.prototype.getStudentById = function (id) {
                    var _this = this;
                    this._studentService.findStudentById(id).subscribe(function (student) {
                        _this.student = student;
                    });
                };
                // getStudent() {
                //   this._studentService.getStudent().subscribe(
                //     students => {
                //       this.students = students;
                //     }
                //   );
                // }
                StudentFormComponent.prototype.onSubmit = function (data) {
                    console.debug("SUBMITTED:", data);
                    console.debug("222222222222:", this.student);
                    if (this.student.id !== undefined) {
                        this._studentService.saveEditStudent(this.student).subscribe(function (student) {
                            console.debug("Save student sucessful.");
                        });
                    }
                    else {
                        this._studentService.createNewStudent(data);
                        console.debug("CREATED NEW STUDENT.");
                    }
                };
                StudentFormComponent.prototype.backToStudentList = function () {
                    this._router.navigate(['StudentList']);
                };
                StudentFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/student/student-form.component.html",
                        providers: [student_service_1.StudentService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, student_service_1.StudentService])
                ], StudentFormComponent);
                return StudentFormComponent;
            }());
            exports_1("StudentFormComponent", StudentFormComponent);
        }
    }
});
//# sourceMappingURL=student-form.component.js.map