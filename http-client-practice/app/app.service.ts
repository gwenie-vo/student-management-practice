import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class AppService {
  constructor(private http: Http) {}

  private _dataUrl = 'http://jsonplaceholder.typicode.com/posts';

  getData() {
    return this.http.get(this._dataUrl); // eyeball results in the console
  }
}
