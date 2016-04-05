import {Component} from 'angular2/core';
import {TodoAddComponent} from './todo/todo-add.component';
import {TodoListComponent} from './todo/todo-list.component';
import {TodoStatusComponent} from './todo/todo-status.component';

@Component ({
  selector: 'my-app',
  templateUrl: "./app/app.component.html",
  directives: [TodoAddComponent, TodoListComponent, TodoStatusComponent]
})

export class AppComponent {
  title = "Todos Management";
}

