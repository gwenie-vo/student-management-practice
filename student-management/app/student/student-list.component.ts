import {Component, OnInit} from 'angular2/core';

import {CreateStudentComponent} from './create-student.component';
import {EditStudentComponent} from './edit-student.component';
import {StudentService} from './student.service';
import {Student} from './student';

@Component({
  templateUrl: "app/student/student-list.component.html"
})

export class StudentListComponent implements OnInit {

  constructor(private _studentService: StudentService) {}

  students: Student[];

  ngOnInit() { this.getStudent(); }

  getStudent() {
    this._studentService.getStudent().subscribe(students => this.students = students);
  }

}
