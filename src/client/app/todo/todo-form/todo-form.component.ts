import { Component, OnInit, Output } from '@angular/core';

import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todo: Todo;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todo = new Todo();
  }

  submit() {
    this.todoService
      .rest
      .create(this.todo)
      .subscribe();
  }

}
