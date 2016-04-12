import {Component, EventEmitter, Output} from 'angular2/core';
import {Todo, TodoStatus}  from './todo';
import {FORM_DIRECTIVES}  from 'angular2/common';
import {TodoService}  from './todo.service';

@Component({
  selector: 'todo-add-component',
  templateUrl: "./app/todo/todo-add.component.html",
  providers: [TodoService, FORM_DIRECTIVES]
})

export class TodoAddComponent {
  todo: Todo;
  @Output() addTodo = new EventEmitter<Todo>();
  todoName: string;

  /*
   * add new todo
   */
  addNewTodo() {
    //create an instance of Todo
    this.todo = new Todo();
    this.todo.name = this.todoName;
    this.todo.status = TodoStatus.ACTIVE;
    this.todo.id = Math.floor(100000000 + Math.random() * 900000000);
    console.log("addNewTodo", this.todo);
    //throw the new Todo tobe ready for todoList catch
    this.addTodo.next(this.todo);
    //reset input
    this.todoName = "";
  }
}
