import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormCardComponent } from './forms/form-card/form-card.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    FormCardComponent
  ],
  exports: [
    FormCardComponent
  ]
})
export class ComponentsModule { }
