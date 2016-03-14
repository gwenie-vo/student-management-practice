//file name: get-fullname.ts
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'getFullName' })

/*
Combine firstName & lastName = fullName
 */
export class GetFullNamePipe implements PipeTransform {
  transform(student: any, args: string[]) {
    return student.firstName + ' ' + student.lastName;
  }
}
