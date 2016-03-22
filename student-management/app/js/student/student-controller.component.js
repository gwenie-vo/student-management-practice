System.register(['angular2/core', 'angular2/router', './student', './student.service'], function(exports_1, context_1) {
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
    var core_1, router_1, student_1, router_2, student_service_1;
    var StudentControllerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (student_1_1) {
                student_1 = student_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            }],
        execute: function() {
            StudentControllerComponent = (function () {
                function StudentControllerComponent(_router, _studentService) {
                    this._router = _router;
                    this._studentService = _studentService;
                    this.deleteStudent = new core_1.EventEmitter();
                }
                StudentControllerComponent.prototype.navigateToEditStudent = function (e) {
                    e.preventDefault();
                    if (this.student) {
                        this._router.navigate(['EditStudent', { id: this.student.id }]);
                    }
                };
                /*Delete student from list
                */
                StudentControllerComponent.prototype.deletedStudent = function () {
                    console.log('Selected Student', this.student);
                    if (this.student) {
                        var student = this.student.firstName + " " + this.student.lastName;
                        var result = confirm("Are you sure to delete " + student + " profile ?");
                        if (result === true) {
                            console.log(student + " has been removed!");
                            this._studentService.deleteStudent(this.student.id);
                            this.deleteStudent.next(this.student);
                        }
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', student_1.Student)
                ], StudentControllerComponent.prototype, "student", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], StudentControllerComponent.prototype, "deleteStudent", void 0);
                StudentControllerComponent = __decorate([
                    core_1.Component({
                        selector: 'student-controller',
                        template: "\n  <nav>\n    <a [routerLink] = \"['CreateStudent']\" class=\"nav-link\">Add New Student</a>\n    <a (click)=\"navigateToEditStudent($event)\" class=\"nav-link\">Edit Student Profile</a>\n    <a (click)=\"deletedStudent()\" class=\"nav-link\">Delete Student</a>\n  </nav>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [student_service_1.StudentService],
                    }), 
                    __metadata('design:paramtypes', [router_2.Router, student_service_1.StudentService])
                ], StudentControllerComponent);
                return StudentControllerComponent;
            }());
            exports_1("StudentControllerComponent", StudentControllerComponent);
        }
    }
});
//# sourceMappingURL=student-controller.component.js.map