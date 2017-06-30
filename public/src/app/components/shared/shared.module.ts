import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MyMaterialModule } from '../../material/material.module';



@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
