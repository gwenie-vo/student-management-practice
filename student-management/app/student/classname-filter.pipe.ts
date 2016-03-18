import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'classNameFilter' })

export class ClassNameFilterPipe implements PipeTransform {
  transform(students: any, args: any[]) {
    console.debug("students:", students);
    console.debug("args:", args);
    // let className = null;
    // if (args && args.length > 0){
    //   className = args[0];
    // }
    //
    //get the first value of array
    let [className] = args;

    if (className && students) {
       // Filter
      students = students.filter(student => {
        return student.class === className;
      });
    }
    return students;
  }
  //http://jilles.me/ng-filter-in-angular2-pipes/
}
