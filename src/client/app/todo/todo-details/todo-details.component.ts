import { Component, OnInit } from '@angular/core';
import { Router, Resolve, ActivatedRoute, Params } from '@angular/router';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {
  todo: Todo;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService) { }

  ngOnInit() {
    this.route.data.forEach((data: { todo: Todo }) => {
      this.todo = data.todo;
    });
  }

}
