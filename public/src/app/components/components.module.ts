import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormCardComponent } from './forms/form-card/form-card.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationComponent } from './locations/location/location.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    FormCardComponent,
    LocationsComponent,
    LocationComponent,
    LocationComponent
  ],
  exports: [
    FormCardComponent,
    LocationComponent
  ]
})
export class ComponentsModule { }
