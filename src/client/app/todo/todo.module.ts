import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  exports: [TodoComponent],
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent
  ],
  providers: [],
})
export class TodoModule { }
