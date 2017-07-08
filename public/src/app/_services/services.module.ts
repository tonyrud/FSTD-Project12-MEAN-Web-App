import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsService } from './requests.service';
import { UsersService } from './users.service';
import { AuthenticationService } from './authentication.service';
import { TrailsService } from './trails.service';
import { LocationsService } from './locations.service';
import { AlertService } from './alert.service';

@NgModule({
  providers: [
    RequestsService,
    UsersService,
    AuthenticationService,
    TrailsService,
    LocationsService,
    AlertService
  ]
})
export class ServicesModule { }
