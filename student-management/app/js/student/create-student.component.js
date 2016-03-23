System.register(['angular2/core', 'angular2/router', './student-list.component', './student.service'], function(exports_1, context_1) {
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
    var core_1, router_1, student_list_component_1, student_service_1;
    var CreateStudentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (student_list_component_1_1) {
                student_list_component_1 = student_list_component_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            }],
        execute: function() {
            CreateStudentComponent = (function () {
                function CreateStudentComponent(_router, _routeParams, _studentService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._studentService = _studentService;
                    this.classes = ['A', 'B', 'C', 'D', 'E'];
                }
                CreateStudentComponent.prototype.ngOnInit = function () {
                };
                //get student list
                CreateStudentComponent.prototype.getStudent = function () {
                    var _this = this;
                    this._studentService.getStudent().subscribe(function (students) {
                        _this.students = students;
                    });
                };
                // backToStudentList() {
                //   this._router.navigate(['StudentList']);
                // }
                CreateStudentComponent.prototype.onSubmit = function (data) {
                    console.debug("data:", data);
                    // localStorage.setItem('student', JSON.stringify(data));
                    this._studentService.createNewStudent(data);
                };
                CreateStudentComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/student/create-student-form.component.html',
                        directives: [student_list_component_1.StudentListComponent],
                        providers: [student_service_1.StudentService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, student_service_1.StudentService])
                ], CreateStudentComponent);
                return CreateStudentComponent;
            }());
            exports_1("CreateStudentComponent", CreateStudentComponent);
        }
    }
});
//# sourceMappingURL=create-student.component.js.map