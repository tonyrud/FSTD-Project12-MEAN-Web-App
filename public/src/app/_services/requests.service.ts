import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable'
import { environment } from '../../environments/environment'

@Injectable()
export class RequestsService {

  constructor(
    private http: Http
  ) {}

  public apiGet(endpoint: string): Observable<any> {
    return this.http.get(environment.apiUrl + endpoint).map((response: Response) => response.json())
  }

  public apiPost(endpoint: string, body: any): Observable<any> {
    return this.http.post(environment.apiUrl + endpoint, body).map((response: Response) => response.json())
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

  public trailApiGet(endpoint: string): Observable<any> {
    return this.http.get('https://trailapi-trailapi.p.mashape.com/' + endpoint, this.trailHeader()).map((response: Response) => response.json())
  }

  private trailHeader (): RequestOptions {
    const headers = new Headers()
    headers.append('X-Mashape-Key', 'BI4KvoJEXxmshqjI2TbFLM34KLqzp15xyvujsng1tHZBTzfDLv')
    headers.append('Accept', 'text/plain')
    return new RequestOptions({headers})
  }

  // private userHeader() {
  //   let currentUser = JSON.parse(localStorage.getItem('currentUser'))
  //   // create authorization header with auth token
  //   if (currentUser && currentUser.auth_token) {
  //     let headers = new Headers({ 'Authorization': currentUser.auth_token })
  //     return new RequestOptions({ headers: headers })
  //   }
  // }

}
