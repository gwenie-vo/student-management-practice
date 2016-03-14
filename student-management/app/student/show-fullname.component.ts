import {Component} from 'angular2/core';
import {getFullNamePipe} from './get-fullname.pipe';
@Component({
  selector: 'get-fullname',
  template: `
    <p>
      My Full Name: {{firstName | addString: lastName}}
    </p>
  `,
  pipes: [getFullNamePipe]
})
export class showFullName { }
