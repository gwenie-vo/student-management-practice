import {Component} from 'angular2/core';
import {Todo}      from './todo';

@Component({

})

export class AddTaskComponent {
  todo: Todo;

  newTodo(todo) {
    // this.todo = todo;
  }
}
