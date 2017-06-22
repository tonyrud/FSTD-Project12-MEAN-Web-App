import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './_auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard
  ],
  declarations: []
})
export class GuardsModule { }
