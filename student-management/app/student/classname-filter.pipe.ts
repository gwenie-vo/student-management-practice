import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'filterByClassName'})

export class FilterStudentByClassName implements PipeTransform {
  transform(students: any, className) {
    // return
    // let [className] = className;
    return students.filter(student => {
      return student.className = className;
    });
    console.log("ARRAY:", student.className);
  }
  //http://jilles.me/ng-filter-in-angular2-pipes/
}
