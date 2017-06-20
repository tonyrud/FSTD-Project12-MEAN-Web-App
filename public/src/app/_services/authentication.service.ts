import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { APP_CONFIG } from '../../app.config';
import { AppConfigService } from './app.config.service';


@Injectable()
export class AuthenticationService {
  private API_URL: string

    constructor(
      private http: Http,
      private router: Router,
      private _configService: AppConfigService
    ) { 
      this.API_URL = _configService.apiUrl
    }
 
    login(user: object): Observable<any> {
        return this.http.post(`${this.API_URL}login`, user)
            .map((response: Response) => {
                // login successful if there's an auth token in the response
                let user = response.json().user
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }
 
    logout(): void {
      // delete server session, if there is a current user logged in
      if (localStorage.getItem('currentUser')) {
        // const token = JSON.parse(localStorage.getItem('currentUser')).auth_token
        // this.http.delete(`${this.API_URL}sessions/${token}`)
      }
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
    }

    notAuthenticated (): void {
        this.router.navigate(['/login']);
    }
}