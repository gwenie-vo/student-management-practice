import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CreateStudentComponent} from './create-student.component';
import {EditStudentComponent} from './edit-student.component';
import {StudentService} from './student.service';
import {Student} from './student';

@Component({
  selector: 'student-list-component',
  templateUrl: "app/student/student-list.component.html",
  providers: [StudentService],
  directives: [ROUTER_DIRECTIVES]
})

export class StudentListComponent implements OnInit {

  //inject StudentService
  constructor(private _studentService: StudentService) {}

  students: Student[];

  ngOnInit() {
     console.debug("_studentService:", this._studentService);
          this.getStudent(); }


  getStudent() {
    this._studentService.getStudent().subscribe(
      students => this.students = students
    );


  }

}
