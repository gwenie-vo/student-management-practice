import {Pipe, PipeTransform} from 'angular2/core';
import { Todo, TodoStatus } from './todo';

@Pipe({ name: 'todoStatusFilter', pure: false })
export class TodoStatusFilterPipe implements PipeTransform {
  transform(todos: Todo[], [status]): Todo[] {
    console.log("data:", todos, status);
    let todoFilter: Todo[] = new Array<Todo>();
    if (status === TodoStatus.ALL){
         todoFilter = todos;
    } else if (todos) {
      todos.forEach((todo) => {
        if (todo.status === status){
          todoFilter.push(todo);
        }
      });
    }
    return todoFilter;
  }
}
