import {Component} from 'angular2/core';
import {Student} from './student';
import {NgForm}    from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';
import {StudentListComponent} from './student-list.component';

@Component({
  templateUrl: 'app/student/create-student-form.component.html',
  directives: [StudentListComponent]
})

export class CreateStudentComponent {
  student: Student;
  classes = ['A', 'B', 'C', 'D', 'E'];

  constructor(
    private _router: Router,
    private _routeParams: RouteParams){}

  // addNewStudent(newStudent) {
  //   if(newStudent) {
  //     //push new Student to Student Table
  //     //....
  //     // this.student.push(newStudent);
  //     // console.log("NEW STUDENT", newStudent);
  //   }
  // }

  backToStudentList() {
    this._router.navigate(['StudentList']);
  }
}


