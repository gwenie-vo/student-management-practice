import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'student-controller',
  template:`
  <nav>
    <a [routerLink] = "['CreateStudent']">Add New Student</a>
    <a [routerLink] = "['EditStudent']">Edit Student Profile</a>
  </nav>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class StudentControllerComponent {


}
