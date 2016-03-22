System.register(['angular2/core', 'angular2/router', './student.service'], function(exports_1, context_1) {
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
    var core_1, router_1, student_service_1;
    var EditStudentComponent;
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
            }],
        execute: function() {
            EditStudentComponent = (function () {
                function EditStudentComponent(_router, _routeParams, _studentService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._studentService = _studentService;
                }
                EditStudentComponent.prototype.ngOnInit = function () {
                    //get id from URL
                    var id = this._routeParams.get('id');
                    console.log("student id:", id);
                    this.getStudentById(id);
                };
                EditStudentComponent.prototype.getStudentById = function (id) {
                    // this.students = JSON.parse(localStorage.getItem('students'));
                    // console.log(this.students);
                    var _this = this;
                    this._studentService.findStudentById(id).subscribe(function (student) {
                        _this.student = student;
                    });
                };
                EditStudentComponent.prototype.saveEditing = function () {
                    // localStorage.setItem('students', JSON.stringify(this.students));
                    // this._router.navigate(['StudentList']);
                    this._studentService.saveStudent(this.student).subscribe(function (student) {
                        console.debug("Save student sucessful.");
                    });
                };
                EditStudentComponent.prototype.backToStudentList = function () {
                    this._router.navigate(['StudentList']);
                };
                EditStudentComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/student/edit-student-form.component.html",
                        providers: [student_service_1.StudentService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, student_service_1.StudentService])
                ], EditStudentComponent);
                return EditStudentComponent;
            }());
            exports_1("EditStudentComponent", EditStudentComponent);
        }
    }
});
//# sourceMappingURL=edit-student.component.js.map