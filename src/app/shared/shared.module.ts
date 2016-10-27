import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Rest } from './rest/rest.service';

import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ButtonComponent
  ],
  declarations: [
    ButtonComponent
  ],
  providers: [Rest],
})
export class SharedModule { }
