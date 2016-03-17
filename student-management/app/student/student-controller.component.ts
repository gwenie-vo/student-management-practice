import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Student} from './student';
import {Router}              from 'angular2/router';

@Component({
  selector: 'student-controller',
  template:`
  <nav>
    <a [routerLink] = "['CreateStudent']" class="nav-link">Add New Student</a>
    <a (click)="navigateToEditStudent($event)" class="nav-link">Edit Student Profile</a>
    <a (click)="deletedStudent()" class="nav-link">Delete Student</a>
  </nav>
  `,
  directives: [ROUTER_DIRECTIVES],
  inputs: ['student']
})

export class StudentControllerComponent {
  student: Student;
  constructor(private _router: Router) {}

  navigateToEditStudent(e) {
    e.preventDefault();
    if (this.student){
      this._router.navigate(['EditStudent', { id: this.student.id }]);
    }
  }

  /*Delete student from list
  */
  deletedStudent(student) {
    console.log('Selected Student', this.student);

    var result = confirm("Are you sure to delete this student?");

    if (result === true) {
      console.log("Student has deleted!");
    }
  }
}
