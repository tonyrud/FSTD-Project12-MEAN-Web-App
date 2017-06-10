import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { provideRoutes} from '@angular/router';

import { AppComponent } from './app.component';

// my modules
import { ServicesModule } from './_services/services.module';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule, routedComponents } from './app.routing.module';
import { HeaderComponent } from './components/shared/header/header.component';
import { SharedModule } from './components/shared/shared.module';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    ServicesModule,
    ComponentsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
