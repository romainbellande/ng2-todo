import { Component, OnInit } from '@angular/core';

import { Todo } from './todo.model';
import { TodoService } from './todo.service';
import { Rest } from '../shared/rest/rest.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(public todoService: TodoService) {
   }

  ngOnInit() {
    this.todoService
      .rest
      .find()
      .subscribe();
  }

}
