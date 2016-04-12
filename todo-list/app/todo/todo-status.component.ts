import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {Todo, TodoStatus}  from './todo';
import {TodoService}  from './todo.service';

@Component({
  selector: 'todo-status-component',
  templateUrl: "./app/todo/todo-status.component.html",
  providers: [TodoService]
})

export class TodoStatusComponent implements OnInit{
  @Input() todoList: Todo[];
  @Output() todoStatus = new EventEmitter<TodoStatus>();

  activeTodoList: Todo[];
  completedTodoList: Todo[];

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
    if (todoList){
      for (var i = 0; i < todoList.length; i++) {
        if (this.todoList[i].status === TodoStatus.ACTIVE) {
          this.activeTodoList.push(this.todoList[i]);
        } else {
          this.completedTodoList.push(this.todoList[i]);
        }
      }
    }
  }

  /*
   * list all active & completed todos after click "All"
   */
  listAllTodo() {
    this.todoStatus.next(TodoStatus.ALL);
    console.log("ALL TODO", this.todoList);
  }

  /*
   * list all active todos
   */
  allActiveTodo() {
    this.todoStatus.next(TodoStatus.ACTIVE);
    // console.log("All Active Todo", this.activeTodoList);
  }

  /*
   * list all completed todos
   */
  allCompleteTodo() {
    this.todoStatus.next(TodoStatus.COMPLETED);
    // console.log("All Complete Todo", this.completedTodoList);
  }

  /*
   * delete all completed todos
   */
  clearCompletedTodo(completedTodoList) {
    this.completedTodoList = [];
    this.todoStatus.next(this.completedTodoList);
    // console.log("Clear all completed Todo: ", this.completedTodoList);
  }
}
