import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Rest } from '../shared/rest/rest.service';

import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  constructor(private rest: Rest) {}

  getTodos(): Observable<Todo[]> {
    return this.rest.get('app/todo/todos.json');
  }
}
