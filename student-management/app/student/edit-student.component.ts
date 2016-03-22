import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {StudentService} from './student.service';
import {Student} from './student';

@Component({
  templateUrl: "app/student/edit-student-form.component.html",
  providers: [StudentService]
})

export class EditStudentComponent {

  student: Student;

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _studentService: StudentService) {}

  ngOnInit() {
    //get id from URL
    let id = this._routeParams.get('id');
    console.log("student id:", id);

    this.getStudentById(id);
  }

  getStudentById(id) {
    this._studentService.findStudentById(id).subscribe( student => {
      this.student = student;
    });

  }

  saveEditing() {
    this._studentService.saveEditStudent(this.student).subscribe(student => {
      console.debug("Save student sucessful.");
    });
  }

  backToStudentList() {
    this._router.navigate(['StudentList']);
  }
}
