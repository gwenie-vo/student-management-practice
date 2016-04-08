import {Component, OnInit} from 'angular2/core';
import {Todo, TodoStatus}      from './todo';
import {TodoService}     from './todo.service';

@Component({
  selector: 'todo-status-component',
  templateUrl: "./app/todo/todo-status.component.html",
  providers: [TodoService]
})

export class TodoStatusComponent implements OnInit{
  todoList;
  activeTodoList = null;

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
    for (var i = 0; i < todoList.length; i++) {
    if (this.todoList[i].status === TodoStatus.ACTIVE) {
        // this.activeTodoList.push(this.todoList[i]);
      }
    }
  }
}
