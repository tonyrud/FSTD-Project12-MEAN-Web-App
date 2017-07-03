import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMaterialModule } from '../material/material.module';
import { FormCardComponent } from './forms/form-card/form-card.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationComponent } from './locations/location/location.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { RouterModule } from '@angular/router';
import { ViewLocationComponent } from './view-location/view-location.component';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    FormCardComponent,
    LocationsComponent,
    LocationComponent,
    ViewLocationComponent,
  ],
  exports: [
    FormCardComponent,
    LocationComponent
  ]
})
export class ComponentsModule { }
