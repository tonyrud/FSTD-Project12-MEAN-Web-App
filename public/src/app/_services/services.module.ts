import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsService } from './requests.service';
import { AppConfigService } from './app.config.service';
import { UsersService } from './users.service';
import { AuthenticationService } from './authentication.service';

@NgModule({
  providers: [
    RequestsService,
    AppConfigService,
    UsersService,
    AuthenticationService
  ]
})
export class ServicesModule { }
