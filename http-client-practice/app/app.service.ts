import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Rx';

@Injectable()
export class AppService {
  constructor(private http: Http) {}

  private _dataUrl = 'http://jsonplaceholder.typicode.com/posts';

  getData() {
   return this.http.get(this._dataUrl).map(res => {
     console.log("RES:" , res.json());
     return res.json();
    }); // eyeball results in the console
  }
}
