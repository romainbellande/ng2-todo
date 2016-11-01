import { Component, Input } from '@angular/core';

import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  isEditMod: boolean = false;
  isActive: boolean = false;
  constructor(private todoService: TodoService) {}
  remove() {
    this.todoService
      .rest
      .remove(this.todo.id)
      .subscribe();
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }

  edit() {
    this.isEditMod = true;
  };

  cancel() {
    this.isEditMod = false;
  }

  update() {
    this.todoService
    .rest
    .update(this.todo)
    .subscribe();
  }
}
