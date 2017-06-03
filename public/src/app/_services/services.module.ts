import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsService } from './requests.service';

@NgModule({
  providers: [
    RequestsService
  ]
})
export class ServicesModule { }
