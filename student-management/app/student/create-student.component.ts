import {Component} from 'angular2/core';
import {Student} from './student';
import {NgForm}    from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';
import {StudentListComponent} from './student-list.component';
import {StudentService} from './student.service';

@Component({
  templateUrl: 'app/student/student-form.component.html',
  directives: [StudentListComponent],
  providers: [StudentService]
})

export class CreateStudentComponent {
  title = "Add a new student";
  student: Student;
  students: Student[];

  classes = ['A', 'B', 'C', 'D', 'E'];

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _studentService: StudentService){}

  ngOnInit() {
  }

  //get student list
  getStudent() {
    this._studentService.getStudent().subscribe(
      students => {
        this.students = students;
      }
    );
  }

  // backToStudentList() {
  //   this._router.navigate(['StudentList']);
  // }

  onSubmit(data){
    console.debug("data:", data);
    // localStorage.setItem('student', JSON.stringify(data));
    this._studentService.createNewStudent(data);
  }
}


