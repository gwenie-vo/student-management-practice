import {Component, ViewChild} from 'angular2/core';
import {Todo, TodoStatus}  from './todo';
import {TodoService}  from './todo.service';

import {TodoAddComponent} from './todo-add.component';
import {TodoListComponent} from './todo-list.component';
import {TodoStatusComponent} from './todo-status.component';

@Component({
  selector: 'todo-panel-component',
  templateUrl: "./app/todo/todo-panel.component.html",
  providers: [TodoService],
  directives: [TodoAddComponent, TodoListComponent, TodoStatusComponent]
})

export class TodoPanelComponent {
  todoListParent: Todo[];
  todoListOrigin: Todo[];

  /*
   * call a child component to this parent component
   */
  @ViewChild(TodoStatusComponent) todoStatusComponent;

  /*
   * inject service and get todoList
   */
  constructor(private _todoService: TodoService) {
    this.todoListParent = _todoService.getTodoList();
      console.log("todoListParent:", this.todoListParent);
  }

  /*
   * add a new Todo to the todoList
   */
  addTodoParent(todo: Todo){
    console.debug("addTodoParent:", todo);
    this.todoListParent.push(todo);
    this.todoStatusComponent.countActiveTodo(this.todoListParent);
  }

  /*
   * show all Todos
   */
  allTodoParent(todoList: Todo[]) {
    this.todoListParent = todoList;
    console.log("allTodoParent", this.todoListParent);
  }

  /*
   * show all Active Todos
   */
  allActiveTodoParent(activeTodoList: Todo[]) {
    this.todoListParent = activeTodoList;
  }

  /*
   * show all completed Todos
   */
  allCompletedParent(completedTodoList) {
    this.todoListParent = completedTodoList;
  }

  clearCompletedParent(completedTodoList) {
    this.todoListParent = completedTodoList;
  }
}
