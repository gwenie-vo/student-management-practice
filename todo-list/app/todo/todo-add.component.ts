import {Component} from 'angular2/core';
import {Todo, TodoStatus}      from './todo';
import {TodoService}      from './todo.service';

@Component({
  selector: 'todo-add-component',
  templateUrl: "./app/todo/todo-add.component.html",
  providers: [TodoService]
})

export class TodoAddComponent {
  todo: Todo;
  todoList;

  constructor(private _todoService: TodoService) {
    this.todoList = _todoService.getTodoList();
  }
  /*
   * add new todo
   */
  addNewTodo(todoName: string) {
    //create an instance of Todo
    this.todo = new Todo();
    this.todo.name = todoName;
    this.todo.status = TodoStatus.ACTIVE;
    this.todo.id = Math.floor(100000000 + Math.random() * 900000000);
    console.log("TODO", this.todo);

    this.todoList.push(this.todo);
    console.log("new todoList array", this.todoList);
  }
}
