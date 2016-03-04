import {Component, OnInit} from 'angular2/core';
import {AppService} from './app.service';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>

  `,
  providers: [
    HTTP_PROVIDERS,
    AppService
  ]
})
export class AppComponent implements OnInit {

  constructor(private _appService: AppService) { }


  title = 'Fetching data example';
  data: any;
  err: any;

  ngOnInit() { this.getPost(); }

  getPost() {
    this._appService.getData()
      .subscribe(
        data => this.data = data,
        err => this.err = err
      );
  }

}
