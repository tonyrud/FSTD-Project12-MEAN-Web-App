import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsService } from './requests.service';
import { AppConfigService } from './app.config.service';
import { UsersService } from './users.service';
import { AuthenticationService } from './authentication.service';
import { TrailsService } from './trails.service';

@NgModule({
  providers: [
    RequestsService,
    AppConfigService,
    UsersService,
    AuthenticationService,
    TrailsService
  ]
})
export class ServicesModule { }
