import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'student-controller',
  template:`
  <nav>
    <a [routerLink] = "['CreateStudent']">Link to CreateStudentComponent</a>
    <a [routerLink] = "['EditStudent']">Link to EditStudentComponent</a>
  </nav>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class StudentControllerComponent {}
