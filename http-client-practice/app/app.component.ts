import {Component, OnInit} from 'angular2/core';
import {AppService} from './app.service';
import {HTTP_PROVIDERS}    from 'angular2/http';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <div *ngFor="#it of arr">{{it.id}} -- {{it.body}}</div>
  `,
  providers: [
    HTTP_PROVIDERS,
    AppService
  ]
})
export class AppComponent implements OnInit {

  constructor(private _appService: AppService) { }


  title = 'Fetching data example';

  arr: any[];

  ngOnInit() { this.getPost(); }

  getPost() {
    this._appService.getData()
      .subscribe(
          data => {
            setTimeout(() => {
              this.logError(data);
              this.arr = data;
            }, 5000);
          },
          err => {
            this.logError(err)
            // next
          }
        );
  }

  logError(err){
      console.log("Test log:", err);
  }
}
