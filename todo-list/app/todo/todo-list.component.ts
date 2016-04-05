import {Component} from 'angular2/core';
import {Todo, TodoStatus}      from './todo';

@Component({
  selector: 'todo-list-component',
  templateUrl: "./app/todo/todo-list.component.html"
})

export class TodoListComponent {
  todolist = TODOLIST;

  /*
   * delete a todo
   */
  deletedTodo(todo) {
    console.log("Todo " + todo.name + " has been delete")
    console.log("DELETED TODO:", todo);
  }
}

var TODOLIST: Todo[] = [
  { "id": 11, "status": TodoStatus.COMPLETED, "name": "Task 1" },
  { "id": 12, "status": TodoStatus.COMPLETED, "name": "Task 2" },
  { "id": 13, "status": TodoStatus.ACTIVE, "name": "Task 3" },
  { "id": 14, "status": TodoStatus.COMPLETED, "name": "Task 4" },
  { "id": 15, "status": TodoStatus.ACTIVE, "name": "Task 5 " },
  { "id": 16, "status": TodoStatus.ACTIVE, "name": "Task 6 " },
  { "id": 17, "status": TodoStatus.COMPLETED, "name": "Task 7" },
  { "id": 18, "status": TodoStatus.COMPLETED, "name": "Task 8" },
  { "id": 19, "status": TodoStatus.ACTIVE, "name": "Task 9 " },
  { "id": 20, "status": TodoStatus.COMPLETED, "name": "Task 10 " }
];
