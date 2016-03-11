import {Component} from 'angular2/core';
// import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// import {CreateStudentComponent} from './create-student.component';
// import {EditStudentComponent} from './edit-student.component';

@Component({
  selector: 'student-list',
  // templateUrl: "app/student/student-list.component.html"
  // template: `
  // <div class="link">
  //   <nav>
  //     <a [routerLink] = "['CreateStudent']">Link to CreateStudentComponent</a>
  //     <a [routerLink] = "['EditStudent']">Link to EditStudentComponent</a>
  //   </nav>
  //   <router-outlet></router-outlet>
  // </div>
  // `,
  // directives: [ROUTER_DIRECTIVES]
})

// @RouteConfig([
//   { path: '/create-student', name: 'CreateStudent', component: CreateStudentComponent },
//   { path: '/edit-student', name: 'EditStudent', component: EditStudentComponent }
// ])

export class StudentListComponent {

}
