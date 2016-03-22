import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
//? why use this
import {Observable}     from 'rxjs/Rx';

import {Student}   from './student';

//Inject Http service
@Injectable()

export class StudentService {

  constructor(private http: Http) {}

  // private _studentUrl = 'app/student/student.json'; //URL to JSON file

  getStudentLocalStorage(){
    let studentLocalStorage: any = localStorage.getItem('student');
    if (!studentLocalStorage) {
      studentLocalStorage = "{}";
      let studentLocalStorageJson = JSON.parse(studentLocalStorage);
      if (!studentLocalStorageJson.list) {
        studentLocalStorageJson.list = [];
      }
      if (!studentLocalStorageJson.classes) {
        studentLocalStorageJson.classes = ["A", "B", "C", "D", "E", "F"];
      }
      // localStorage.setItem('student', JSON.stringify(studentLocalStorageJson));
      this.saveStudentStg(studentLocalStorageJson);
    }
    let studentStg = JSON.parse(localStorage.getItem('student'));
    return studentStg;
  }


  saveStudentStg(studentStg){
    localStorage.setItem('student', JSON.stringify(studentStg));
  }

  getStudent() {
    // console.debug("TEST2:", this.http.get(this._studentUrl));
    // get data from JSON
    // return this.http.get(this._studentUrl)
    //           .map(res => {
    //             return res.json().data;
    //           });
    return Observable.create((observe) => {
      let studentStg = this.getStudentLocalStorage();
      observe.next(studentStg.list);
        observe.complete();
    });
  }

  // find a student has id === currentStudent id
  findStudentById(id) {
    let student = null;
    return this.getStudent().map(
      students => {
        for (var i = 0; i < students.length; i++) {
          if (students[i].id === id) {
            student = students[i];
          }
        }
        return student;
      }
    );
  }

  /**
   * [saveStudent description]
   * @param {[type]} student [description]
   */
  saveStudent(student) {
    // localStorage.setItem('students', JSON.stringify(this.students));
    // this._router.navigate(['StudentList']);
    console.log("save:", student);
  }

  createNewStudent(student) {
    let studentStg = this.getStudentLocalStorage();
    student.id = (Math.random() * 10000) + 1;
    studentStg.list.push(student);
    this.saveStudentStg(studentStg);
  }

  deleteStudent(studentId) {
    let studentStg = this.getStudentLocalStorage();
    studentStg.list.forEach((student, idx) => {
      console.debug("studentId:", studentId, student.id);
      console.log("DELETE1:", idx);
      if (student.id === studentId) {
        console.log("DELETE:", idx);
        studentStg.list.splice(idx, 1);
      }
    })
    this.saveStudentStg(studentStg);
  }
}
