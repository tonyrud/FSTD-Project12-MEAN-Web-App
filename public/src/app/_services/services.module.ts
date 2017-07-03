import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsService } from './requests.service';
import { UsersService } from './users.service';
import { AuthenticationService } from './authentication.service';
import { TrailsService } from './trails.service';
import { LocationsService } from './locations.service';

@NgModule({
  providers: [
    RequestsService,
    UsersService,
    AuthenticationService,
    TrailsService,
    LocationsService
  ]
})
export class ServicesModule { }
