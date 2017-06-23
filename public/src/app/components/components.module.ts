import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormCardComponent } from './forms/form-card/form-card.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationComponent } from './locations/location/location.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormCardComponent,
    LocationsComponent,
    LocationComponent,
  ],
  exports: [
    FormCardComponent,
    LocationComponent
  ]
})
export class ComponentsModule { }
