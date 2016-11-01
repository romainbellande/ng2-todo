import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Rest } from '../shared/rest/rest.service';

import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  todos: Todo[];
  constructor(public rest: Rest) {
    this.todos = [];
    this.rest.set('/api/todo');
  }

  isEmpty(): boolean {
    return !this.rest.list;
  }

  remove(_id: number): void {
    const index = this.todos.findIndex(todo => todo._id === _id);
    this.todos.splice(index, 1);
  }

  update(_id: number) {

  }

  add(todo: Todo) {
    this.todos.push(todo);
  }
}
