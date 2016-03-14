//file name: get-fullname.ts
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'getFullName' })

export class getFullNamePipe implements PipeTransform {
  transform(firstName:string, lastName:string, students: string[]) {
    return;
  }
}

/*
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, args: string[]): any {
    return Math.pow(value, parseInt(args[0] || '1', 10));
  }
}
 */
