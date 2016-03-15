import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

@Component({
  template: "<h2>Edit Student Profile</h2>"
})

export class EditStudentComponent {
  // student: Student;
  constructor(
    private _router: Router,
    private _routeParams: RouteParams) { }
  ngOnInit() {
    let id = this._routeParams.get('id');
    console.log("student id:", id);
  }
}
