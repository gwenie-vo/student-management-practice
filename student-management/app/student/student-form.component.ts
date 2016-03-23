import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {NgForm}    from 'angular2/common';

import {StudentService} from './student.service';
import {Student} from './student';

@Component({
  templateUrl: "app/student/student-form.component.html",
  providers: [StudentService]
})

export class StudentFormComponent {
  student: Student = new Student();
  classes = null;

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _studentService: StudentService) {}

  ngOnInit() {
    //get id from URL
    let id = this._routeParams.get('id');
    console.log("student id:", id);

    // if there's an id then we get student by that Id and bind to the form
    if (id){
      this.getStudentById(id);
    }
    this.getClasses();
  }

  getClasses() {
    this._studentService.getClasses().subscribe( classes => {
      this.classes = classes;
      console.log("CLASSSSSSSSSSS", classes);
    })
  }

  getStudentById(id) {
    this._studentService.findStudentById(id).subscribe(student => {
      this.student = student;
    });
  }

  // getStudent() {
  //   this._studentService.getStudent().subscribe(
  //     students => {
  //       this.students = students;
  //     }
  //   );
  // }

  onSubmit(data) {
    console.debug("SUBMITTED:", data);
    console.debug("222222222222:", this.student);
    if (this.student.id !== undefined) {
      this._studentService.saveEditStudent(this.student).subscribe(student => {
        console.debug("Save student sucessful.");
      });
    } else {
      this._studentService.createNewStudent(data);
      console.debug("CREATED NEW STUDENT.");
    }
  }

  backToStudentList() {
    this._router.navigate(['StudentList']);
  }

}
