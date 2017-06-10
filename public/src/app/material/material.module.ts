import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdButtonModule,
  MdMenuModule,
  MdCardModule,
  MdToolbarModule,
  MdCheckboxModule,
  MdIconModule,
  MdInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule
  ],
  exports: [
    CommonModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule
  ],
  declarations: []
})
export class MaterialModule { }
