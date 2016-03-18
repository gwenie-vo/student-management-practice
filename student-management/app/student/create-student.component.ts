import {Component} from 'angular2/core';
import {Student} from './student';
import {NgForm}    from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';
import {StudentListComponent} from './student-list.component';
import {StudentService} from './student.service';

@Component({
  templateUrl: 'app/student/create-student-form.component.html',
  directives: [StudentListComponent],
  providers: [StudentService]
})

export class CreateStudentComponent {
  student: Student;
  students: Student[];

  classes = ['A', 'B', 'C', 'D', 'E'];

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _studentService: StudentService){}

  ngOnInit() {
    console.log("STUDENT",this.student);
    console.log("STUDENT ARRAY", this.students);
  }

  //get student list
  getStudent() {
    this._studentService.getStudent().subscribe(
      students => {
        this.students = students;
      }
    );
  }

  addNewStudent() {
    // this.student = new Student(32, '', '', '', '', '');
    // if(newStudent) {
      //push new Student to Student Table
      //....
      // this.student.push(newStudent);
      // console.log("NEW STUDENT", newStudent);
    // }
  }

  backToStudentList() {
    this._router.navigate(['StudentList']);
  }

  onSubmit(data){
    console.debug("DATA:", data);
  }
}


