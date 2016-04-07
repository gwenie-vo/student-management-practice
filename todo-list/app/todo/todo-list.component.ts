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
   * click enter to delete a todo
   */
  deletedTodo(todo) {
    for (var i = 0; i < this.todoList.length; i++) {
      if(todo.id===this.todoList[i].id) {
        console.log("DELETED TODO ",i);
        this.todoList.splice(i, 1);
      }
    }
  }

  /*
   * set editing field
   */
  editTodo(todo) {
    todo.editing = true;
    todo.originName = todo.name;
  }

  toggleTodo(todo) {
    if(todo.status===TodoStatus.ACTIVE) {
      todo.status = TodoStatus.COMPLETED;
    } else {
      todo.status = TodoStatus.ACTIVE;
    }
  }

  /*
   * update Todo value
   */
  updateEditingTodo(todo, editedName: string) {
    editedName = editedName.trim();
    // console.log("New task name", editedName);
    if(editedName.length===0) {
      return this.deletedTodo(todo);
    }

    todo.name = editedName;
    todo.editing = false;
  }

  /*
   * reset to origin value if press escape key
   */
  cancelUpdateTodo(todo) {
    todo.editing = false;
    todo.name = todo.originName;
  }
}
