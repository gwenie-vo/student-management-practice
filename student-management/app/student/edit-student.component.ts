import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {StudentService} from './student.service';
import {Student} from './student';

@Component({
  template: "<h2>Edit Student Profile</h2>",
  providers: [StudentService]
})

export class EditStudentComponent {

  student: Student;

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _studentService: StudentService) { }

  ngOnInit() {
    let id = this._routeParams.get('id');
    console.log("student id:", id);
    this.getStudentFromList();
  }

  getStudentFromList() {
    this._studentService.getStudent().subscribe(
      student => this.student = student
    );
  }
}
