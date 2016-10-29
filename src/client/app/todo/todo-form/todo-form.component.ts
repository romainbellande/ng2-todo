import { Component, OnInit } from '@angular/core';

import { Rest } from '../../shared/rest/rest.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todo: Todo;
  todoRes: Todo;
  constructor(private rest: Rest) { }

  ngOnInit() {
    this.todo = new Todo();
  }

  // submit() {
  //   this.rest.post('/api/todo', this.todo)
  //     .subscribe(todo => this.todoRes = todo);
  // }

}
