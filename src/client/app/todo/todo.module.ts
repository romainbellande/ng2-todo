import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { Rest } from '../shared/rest/rest.service';

import { TodoRoutingModule } from './todo-routing';
import { TodoService } from './todo.service';
import { TodoResolveService } from './todo-details/todo-resolve.service';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    TodoRoutingModule
  ],
  exports: [
    TodoComponent,
    TodoHeaderComponent
  ],
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent,
    TodoDetailsComponent,
    TodoHeaderComponent
  ],
  providers: [
    Rest,
    TodoService,
    TodoResolveService
  ],
})
export class TodoModule { }
