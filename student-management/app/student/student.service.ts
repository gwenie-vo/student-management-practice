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

  private _studentUrl = 'app/student/student.json'; //URL to JSON file

  getStudent() {
     // console.debug("TEST:", this.http.get(this._studentUrl));
    return this.http.get(this._studentUrl)
              .map(res => {
                return res.json().data;
              });
  }



}
