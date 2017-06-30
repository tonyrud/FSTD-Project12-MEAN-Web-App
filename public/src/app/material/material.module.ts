import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MdButtonModule,
  MdMenuModule,
  MdCardModule,
  MdToolbarModule,
  MdCheckboxModule,
  MdIconModule,
  MdInputModule,
  MdSliderModule,
  MdSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdSliderModule,
    MdSelectModule
  ],
  exports: [
    CommonModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdSliderModule,
    MdSelectModule
  ],
  declarations: []
})
export class MyMaterialModule { }
