import {Component, ViewChild} from 'angular2/core';
import {Todo, TodoStatus}  from './todo';
import {TodoService}  from './todo.service';

import {TodoAddComponent} from './todo-add.component';
import {TodoListComponent} from './todo-list.component';
import {TodoStatusComponent} from './todo-status.component';
import { TodoStatusFilterPipe } from './todo-status-filter.pipe';

@Component({
  selector: 'todo-panel-component',
  templateUrl: "./app/todo/todo-panel.component.html",
  providers: [TodoService],
  directives: [TodoAddComponent, TodoListComponent, TodoStatusComponent],
  pipes: [ TodoStatusFilterPipe ]
})

export class TodoPanelComponent {
  todos: Todo[];
  status: TodoStatus = TodoStatus.ALL;

  /*
   * call a child component to this parent component
   */
  @ViewChild(TodoStatusComponent) todoStatusComponent;

  /*
   * inject service and get todoList
   */
  constructor(private _todoService: TodoService) {
    this.todos = _todoService.getTodoList();
  }

  /*
   * add a new Todo to the todoList
   */
  addTodoParent(todo: Todo){
    console.debug("addTodoParent:", todo);
    this.todos.push(todo);
    this.todoStatusComponent.countActiveTodo(this.todos);
  }

  /*
   * show all Todos
   */
  changeTodoStatus(status: TodoStatus) {
    this.status = status;
  }

  clearCompletedParent(completedTodoList) {
    this.todos = completedTodoList;
  }
}
