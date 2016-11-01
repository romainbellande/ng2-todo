import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Injectable()
export class TodoResolveService {

  constructor(private todoService: TodoService, private router: Router) {}

  url(route) {
    let url = '';
    for (let i = 0; i < route.url.length; i++) {
      url += '/' + route.url[i];
    }
    return url;
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Todo> | boolean {
    console.log(route);
    let id: string = route.params['id'];
    if (this.todoService.isEmpty()) {
      return this.todoService.rest.findById(id);
    } else {
      return this.todoService.rest.searchByProperty('_id', id);
    }
  }
}
