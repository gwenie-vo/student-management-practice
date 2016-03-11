import {Component} from 'angular2/core';
import {StudentListComponent}   from './student/student-list.component';

@Component({
  selector: 'my-app',
  template:`
    <h2>{{title}}</h2>
    <student-list></student-list>
  `,
  directives: [StudentListComponent]
})

export class AppComponent {
  title = "Student Management Application";
}
