import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoResolveService } from './todo-details/todo-resolve.service';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

const routes: Routes = [
  {
    path: 'todo/:id',
    component: TodoDetailsComponent,
    resolve: {
      todo: TodoResolveService
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule { }

export const routedComponents = [TodoDetailsComponent];
