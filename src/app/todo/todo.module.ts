import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

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
    TodoItemComponent
  ],
  providers: [],
})
export class TodoModule { }
