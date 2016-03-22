import {Component, EventEmitter, Output, Input} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Student} from './student';
import {Router}              from 'angular2/router';
import {StudentService} from './student.service';

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
  providers: [StudentService],
  // inputs: ['student'],
  // outputs: ['deleteStudent']
})

export class StudentControllerComponent {
  @Input() student: Student;
  @Output() deleteStudent = new EventEmitter<any>();
  constructor(private _router: Router,
              private _studentService: StudentService) {}

  navigateToEditStudent(e) {
    e.preventDefault();
    if (this.student){
      this._router.navigate(['EditStudent', { id: this.student.id }]);
    }
  }

  /*Delete student from list
  */
  deletedStudent() {
    console.log('Selected Student', this.student);
    if (this.student) {
      let student = this.student.firstName + " " + this.student.lastName;

      var result = confirm("Are you sure to delete " + student + " profile ?");

      if (result === true) {
        console.log(student + " has been removed!");
        this._studentService.deleteStudent(this.student.id);
        this.deleteStudent.next(this.student);
      }
    }
  }
}
