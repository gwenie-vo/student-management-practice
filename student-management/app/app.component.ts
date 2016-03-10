import {Component} from 'angular2/core';
// import {Student}   from './student';

@Component({
  selector: 'my-app',
  template:`
    <h2>{{title}}</h2>
  `
})

export class AppComponent {
  title = "Student Management Application";
}
