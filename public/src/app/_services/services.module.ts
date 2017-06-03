import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsService } from './requests.service';
import { AppConfigService } from './app.config.service';

@NgModule({
  providers: [
    RequestsService,
    AppConfigService
  ]
})
export class ServicesModule { }
