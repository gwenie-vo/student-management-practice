import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Student} from './student';
import {Router}              from 'angular2/router';

@Component({
  selector: 'student-controller',
  template:`
  <nav>
    <a [routerLink] = "['CreateStudent']">Add New Student</a>
    <a (click)="navigateToEditStudent($event)">Edit Student Profile</a>
  </nav>
  <div *ngIf="student">{{student.id}}</div>
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
}
