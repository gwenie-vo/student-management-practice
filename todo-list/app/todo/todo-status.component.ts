import {Component} from 'angular2/core';
import {Todo}      from './todo';
import {TodoService}     from './todo.service';

@Component({
  selector: 'todo-status-component',
  templateUrl: "./app/todo/todo-status.component.html",
  providers: [TodoService]
})

export class TodoStatusComponent {

}
