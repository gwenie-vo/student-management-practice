import {Component} from 'angular2/core';
import {Student} from './student';
import {StudentListComponent} from './student-list.component';

@Component({
  templateUrl: 'app/student/student-form.component.html',
  directives: [StudentListComponent]
})

export class CreateStudentComponent {
  student: Student;

  addNewStudent(newStudent) {
    if(newStudent) {
      //push new Student to Student Table
      //....
      this.student.push(newStudent);
      console.log("NEW STUDENT", newStudent);
    }
  }

}


