import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';


@Injectable()
export class AuthenticationService {

  constructor(
    private http: Http,
    private router: Router
  ) {
  }

  login(user: object): Observable<any> {
    return this.http.post(environment.apiUrl + 'login', user)
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
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  notAuthenticated(): void {
    this.router.navigate(['/login']);
  }
}