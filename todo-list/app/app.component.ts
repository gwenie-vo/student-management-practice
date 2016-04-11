import {Component} from 'angular2/core';
import {TodoPanelComponent} from './todo/todo-panel.component';

@Component ({
  selector: 'my-app',
  templateUrl: "./app/app.component.html",
  directives: [TodoPanelComponent]
})

export class AppComponent {
  title = "Todos Management";
}

