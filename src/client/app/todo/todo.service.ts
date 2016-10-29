import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Rx';

import { Rest } from '../shared/rest/rest.service';

// import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  constructor(public rest: Rest) {
    this.rest.set('/api/todo');
  }
}
