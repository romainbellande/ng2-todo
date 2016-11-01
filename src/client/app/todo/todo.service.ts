import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Rest } from '../shared/rest/rest.service';

import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  todos: Todo[];
  constructor(public rest: Rest) {
    this.todos = [];
    this.rest.set('todo');
  }

  isEmpty(): boolean {
    return !this.rest.list;
  }

  remove(id: number): void {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos.splice(index, 1);
  }

  add(todo: Todo) {
    this.todos.push(todo);
  }
}
