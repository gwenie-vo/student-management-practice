import {Component, OnInit} from 'angular2/core';
import {AppService} from './app.service';
import {HTTP_PROVIDERS}    from 'angular2/http';

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

  ngOnInit() { this.getPost(); }

  getPost() {
    this._appService.getData()
      .subscribe(
          data => this.logError(data),
          err => this.logError(err)
        );
  }

  logError(err){
      console.log(JSON.parse(err._body));
  }
}
