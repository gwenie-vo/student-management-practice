import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CreateStudentComponent} from './create-student.component';
import {EditStudentComponent} from './edit-student.component';
import {StudentService} from './student.service';
import {Student} from './student';
import {GetFullNamePipe} from './get-fullname.pipe';
import {StudentControllerComponent} from './student-controller.component';
import {HighLightDirective} from './highlight.directive';

@Component({
  selector: 'student-list-component',
  templateUrl: "app/student/student-list.component.html",
  providers: [StudentService],
  directives: [ROUTER_DIRECTIVES, StudentControllerComponent, HighLightDirective],
  pipes: [GetFullNamePipe],
})

export class StudentListComponent implements OnInit {

  //inject StudentService
  constructor(private _studentService: StudentService) { }

  classes = ["A", "B", "C", "D", "E"];
  students: Student[];
  currentStudent: Student;
  selectedClassName; //keyword to filter
  isSelected: boolean;

  ngOnInit() {
    console.debug("_studentService:", this._studentService);

    // let students = JSON.parse(localStorage.getItem('students'));

    // if (students) {
    //   this.students = students;
    // } else {
    //   this.getStudent();
    // }
    this.getStudent();
  }

  //get student list
  getStudent() {
    this._studentService.getStudent().subscribe(
      students => {
        this.students = students;

        // localStorage.setItem('students', JSON.stringify(this.students));
      }
    );
  }

  //get className for filtering
  getClassName(className) {
    console.log("CLASS NAME ", className);
    this.selectedClassName = className;
    console.log("SELECTED CLASS ",this.selectedClassName);
    this.isSelected = !this.isSelected;
  }

  getCurrentStudent(student) {
    console.log("Student:", student);
    this.currentStudent = student;
  }
}
