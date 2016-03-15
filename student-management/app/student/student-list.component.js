System.register(['angular2/core', 'angular2/router', './student.service', './get-fullname.pipe', './student-controller.component'], function(exports_1, context_1) {
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
    var core_1, router_1, student_service_1, get_fullname_pipe_1, student_controller_component_1;
    var StudentListComponent;
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
            function (get_fullname_pipe_1_1) {
                get_fullname_pipe_1 = get_fullname_pipe_1_1;
            },
            function (student_controller_component_1_1) {
                student_controller_component_1 = student_controller_component_1_1;
            }],
        execute: function() {
            StudentListComponent = (function () {
                //inject StudentService
                function StudentListComponent(_studentService) {
                    this._studentService = _studentService;
                }
                StudentListComponent.prototype.ngOnInit = function () {
                    console.debug("_studentService:", this._studentService);
                    var students = JSON.parse(localStorage.getItem('students'));
                    if (students) {
                        this.students = students;
                    }
                    else {
                        this.getStudent();
                    }
                };
                StudentListComponent.prototype.getStudent = function () {
                    var _this = this;
                    this._studentService.getStudent().subscribe(function (students) {
                        _this.students = students;
                        localStorage.setItem('students', JSON.stringify(_this.students));
                    });
                };
                StudentListComponent.prototype.getCurrentStudent = function (student) {
                    console.log("Student:", student);
                    this.currentStudent = student;
                };
                StudentListComponent = __decorate([
                    core_1.Component({
                        selector: 'student-list-component',
                        templateUrl: "app/student/student-list.component.html",
                        providers: [student_service_1.StudentService],
                        directives: [router_1.ROUTER_DIRECTIVES, student_controller_component_1.StudentControllerComponent],
                        pipes: [get_fullname_pipe_1.GetFullNamePipe]
                    }), 
                    __metadata('design:paramtypes', [student_service_1.StudentService])
                ], StudentListComponent);
                return StudentListComponent;
            }());
            exports_1("StudentListComponent", StudentListComponent);
        }
    }
});
//# sourceMappingURL=student-list.component.js.map