import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {StudentListComponent}   from './student/student-list.component';
import {CreateStudentComponent} from './student/create-student.component';
import {EditStudentComponent} from './student/edit-student.component';

@Component({
  selector: 'my-app',
  template:`
    <h2 class="title">{{title}}</h2>
    <div class="link">

      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})

/*
  config navigation link
 */
@RouteConfig([
  { path: '/', name: 'StudentList', component: StudentListComponent },
  { path: '/create-student', name: 'CreateStudent', component: CreateStudentComponent },
  { path: '/edit-student', name: 'EditStudent', component: EditStudentComponent }
])

export class AppComponent {
  title = "Student Management Application";
}
