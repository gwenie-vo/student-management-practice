import {Component} from 'angular2/core';
import {Todo, TodoStatus}      from './todo';
import {TodoService}      from './todo.service';

@Component({
  selector: 'todo-list-component',
  templateUrl: "./app/todo/todo-list.component.html",
  providers: [TodoService]
})

export class TodoListComponent {
  todoList;

  constructor(private _todoService: TodoService) {
    this.todoList = _todoService.getTodoList();
  }
  /*
   * delete a todo
   */
  deletedTodo(todo) {
    console.log("Todo " + todo.name + " has been delete")
    console.log("DELETED TODO:", todo);
  }

  editTodo(todo) {
    todo.editing = true;
  }

  updateEditingTodo(todo, editedName: string) {
    editedName = editedName.trim();
    console.log("AAAAAAAAAAA", editedName);
    if(editedName.length===0) {
      return this.todoList.remove(todo);
    }
    todo.name = editedName;
    todo.editing = false;
  }

  cancelUpdateTodo(todo) {
    todo.editing = false;
  }
}
