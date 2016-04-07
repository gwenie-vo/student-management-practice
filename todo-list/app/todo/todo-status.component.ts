import {Component, OnInit} from 'angular2/core';
import {Todo}      from './todo';
import {TodoService}     from './todo.service';

@Component({
  selector: 'todo-status-component',
  templateUrl: "./app/todo/todo-status.component.html",
  providers: [TodoService]
})

export class TodoStatusComponent implements OnInit{
  todoList;

  constructor(private _todoService: TodoService) {
    this.todoList = _todoService.getTodoList();
    console.log("TODO LIST FOR STATUS",this.todoList);
  }

  ngOnInit() {
    // this.countUncheckTodo(this.todoList);
  }

  // countUncheckTodo(todoList) {
  //   if(todo.status===0) {
  //     console.log("ACTIVE TODO");
  //   }
  // }

  listAllTodo() {

  }
}
