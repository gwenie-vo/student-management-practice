import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
//? why use this
import {Observable}     from 'rxjs/Observable';

import {Student}   from './student';

@Injectable()

//Inject Http service
export class StudentService {
  constructor(private http: Http) {}

  private _studentUrl = 'app/student/student.json'; //URL to JSON file

  getStudent() {
    return this.http.get(this._studentUrl)
                    .map(res => {
                      console.log("RES:", res.json());
                      return res.json();
                    });
  }


}
