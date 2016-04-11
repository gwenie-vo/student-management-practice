import {Component, OnInit} from 'angular2/core';
import {Todo, TodoStatus}  from './todo';
import {TodoService}  from './todo.service';

@Component({
  selector: 'todo-status-component',
  templateUrl: "./app/todo/todo-status.component.html",
  providers: [TodoService]
})

export class TodoStatusComponent implements OnInit{
  todoList;
  activeTodoList: Todo[];
  completedTodoList: Todo[];

  constructor(private _todoService: TodoService) {
    this.todoList = _todoService.getTodoList();
    console.log("TODO LIST FOR STATUS",this.todoList);
  }

  /*
   * init countActiveTodo();
   */
  ngOnInit() {
    this.countActiveTodo(this.todoList);
  }

  /*
   * count active items
   */
  countActiveTodo(todoList) {
    this.activeTodoList = new Array<Todo>();
    this.completedTodoList = new Array<Todo>();

    for (var i = 0; i < todoList.length; i++) {
      if (this.todoList[i].status === TodoStatus.ACTIVE) {
        this.activeTodoList.push(this.todoList[i]);
      } else {
        this.completedTodoList.push(this.todoList[i]);
      }
    }
  }

  /*
   * list all active & completed todos after click "All"
   */
  listAllTodo() {
    this.todoList = this._todoService.getTodoList();
    console.log("ALL TODO", this.todoList);
  }

  /*
   * list all active todos
   */
  allActiveTodo() {
    this.countActiveTodo(this.todoList);
    console.log("All Active Todo", this.activeTodoList);
    // this.todoList = this.activeTodoList;
  }

  /*
   * list all completed todos
   */
  allCompleteTodo() {
    this.countActiveTodo(this.todoList);
    console.log("All Active Todo", this.completedTodoList);
    // this.todoList = this.activeTodoList;
  }

  /*
   * delete all completed todos
   */
  clearCompletedTodo(completedTodoList) {
    this.completedTodoList = [];
    console.log("Clear all completed Todo: ", this.completedTodoList);
  }
}
