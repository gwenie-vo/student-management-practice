import {Injectable} from 'angular2/core';
import {Todo}       from './todo';
import {TODOLIST}   from './mock-data';

@Injectable()
export class TodoService {
  getTodoList() {
    return TODOLIST;
  }
}
