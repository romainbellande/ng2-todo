import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Rest } from './rest/rest.service';
import { MaterializeModule } from './materialize/materialize.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule
  ],
  exports: [MaterializeModule],
  declarations: [],
  providers: [],
})
export class SharedModule { }
