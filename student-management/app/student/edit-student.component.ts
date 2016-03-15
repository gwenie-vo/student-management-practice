import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {StudentService} from './student.service';
import {Student} from './student';

@Component({
  templateUrl: "app/student/edit-student-form.component.html",
  providers: [StudentService]
})

export class EditStudentComponent {

  students: Student[];
  studentIndex: number;

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _studentService: StudentService) { }

  ngOnInit() {
    let id = this._routeParams.get('id');
    console.log("student id:", id);

    this.getStudentFromList(id);
  }

  getStudentFromList(id) {

    this.students = JSON.parse(localStorage.getItem('students'));
    console.log(this.students);

    this.studentIndex = this._studentService.findStudentById(this.students, id);

  }

  SaveEditing() {
    localStorage.setItem('students', JSON.stringify(this.students));
    this._router.navigate(['StudentList']);
  }
}
