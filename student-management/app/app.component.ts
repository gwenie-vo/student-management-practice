import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {StudentListComponent}   from './student/student-list.component';
import {CreateStudentComponent} from './student/create-student.component';
import {EditStudentComponent} from './student/edit-student.component';

@Component({
  selector: 'my-app',
  template:`
    <h2>{{title}}</h2>
    <div class="link">
      <nav>
        <a [routerLink] = "['CreateStudent']">Link to CreateStudentComponent</a>
        <a [routerLink] = "['EditStudent']">Link to EditStudentComponent</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/create-student', name: 'CreateStudent', component: CreateStudentComponent },
  { path: '/edit-student', name: 'EditStudent', component: EditStudentComponent }
])

export class AppComponent {
  title = "Student Management Application";
}
