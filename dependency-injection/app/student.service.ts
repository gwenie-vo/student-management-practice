import {Injectable} from 'angular2/core';
import {STUDENTS} from './mock-student';
import {Student} from './student';



@Injectable()
export class StudentService {
  constructor(){

  }
  getName() {
    // Real service
    return STUDENTS;
  }
}



@Injectable()
export class MockStudentService {
  constructor() {

  }
  getName() {
    // Mock service
    return [{ "id": 12, "name": "Mock-data1"}, {"id": 13, "name":"Mock-dat2"}];
  }
}
