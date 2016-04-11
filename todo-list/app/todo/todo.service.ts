import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}  from 'rxjs/Rx';
import {Todo}  from './todo';
import {TODOLIST}  from './mock-data';

@Injectable()
export class TodoService {
  getTodoList() {
    return TODOLIST;
  }
}
