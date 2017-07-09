import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './_guards/_auth.guard';
import { LocationsComponent } from './components/locations/locations.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ViewLocationComponent } from './components/view-location/view-location.component';
import { UserLocationsComponent } from './components/user-locations/user-locations.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'search-locations', component: LocationsComponent, canActivate: [AuthGuard] },
  { path: 'view-location', component: ViewLocationComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotpasswordComponent },
  { path: 'account/reset/:token', component: ResetpasswordComponent },
  { path: 'account/saved-locations', component: UserLocationsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // if no paths match, redirect to home
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  ForgotpasswordComponent,
  ResetpasswordComponent
];