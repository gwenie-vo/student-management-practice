import {Component} from 'angular2/core';

@Component({
  templateUrl: 'app/student/student-form.component.html'
})

export class CreateStudentComponent {

  addNewStudent(newStudent: string) {
    if(newStudent) {
      //push new Student to Student Table
      //....
    }
  }

}


