//define todo status
export enum TodoStatus{
  ACTIVE = 0,
  COMPLETED = 1
}

// Todo class
export class Todo {
  id: number;
  name: string;
  status: TodoStatus;
  constructor(){}
}

// how to use enum
// a = new Todo();
// a.id = 1;
// a.name = "name input";
// a.status = TodoStatus.COMPLETED;

