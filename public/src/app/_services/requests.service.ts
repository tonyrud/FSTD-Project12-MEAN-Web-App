import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { AppConfigService } from './app.config.service';

@Injectable()
export class RequestsService {
  // hold api server string
  private API_URL: string

  constructor(
    private http: Http,
    private _configService: AppConfigService
  ) {
    this.API_URL = _configService.apiUrl
   }

  public apiGet(endpoint: string): Observable<any> {
    return this.http.get(this.API_URL + endpoint).map((response: Response) => response.json())
  }

  public apiPost(endpoint: string, body: any): Observable<any> {
    return this.http.post(this.API_URL + endpoint, body).map((response: Response) => response.json())
  }

  // public apiPut(endpoint: string, body: any) {
  //   return this.http.put(APP_CONFIG.apiServer + endpoint, body, this.userHeader()).map((response: Response) => response.json())
  // }

  // public apiPatch(endpoint: string, body: any = {}) {
  //   return this.http.patch(APP_CONFIG.apiServer + endpoint, body, this.userHeader()).map((response: Response) => response.json())
  // }

  // public apiDelete(endpoint: string) {
  //   return this.http.delete(APP_CONFIG.apiServer + endpoint, this.userHeader()).map((response: Response) => response.json())
  // }

  // private userHeader() {
  //   let currentUser = JSON.parse(localStorage.getItem('currentUser'))
  //   // create authorization header with auth token
  //   if (currentUser && currentUser.auth_token) {
  //     let headers = new Headers({ 'Authorization': currentUser.auth_token })
  //     return new RequestOptions({ headers: headers })
  //   }
  // }

}
