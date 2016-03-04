import {Component} from 'angular2/core';
import {Student} from './student';
import {STUDENTS} from './mock-student';
import {StudentService, MockStudentService} from './student.service';
import {LoggerMessage} from './logger-message';
import {provide} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <h2>User List</h2>
    <ul>
      <li *ngFor="#student of students">
        {{student.id}} -- {{student.name}}
      </li>
    </ul>
  `,
  // providers: [StudentService]
  providers: [provide(StudentService, {useClass: MockStudentService})]
  // providers: [provide(StudentService, { useClass: MockStudentService })]
})
//?why we dont include @Injectable() here?
export class AppComponent {
  students: Student[];

  constructor(private _studentService: StudentService) {
    console.log("STUDENT NAME:", this._studentService.getName());
    this.students = this._studentService.getName();
  }


  // private _studentService: StudentService;
  // constructor(_studentService: StudentService) {
  //    this._studentService = _studentService;
  // }

}


