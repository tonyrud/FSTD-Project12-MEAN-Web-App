import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable'
import { environment } from '../../environments/environment'
import { apiErrors } from '../_interfaces/errors.interface';

@Injectable()
export class RequestsService {

  constructor(
    private http: Http
  ) {}

  public apiGet(endpoint: string): Observable<any> {
    return this.http.get(environment.apiUrl + endpoint, this.apiHeader())
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }

  public apiPost(endpoint: string, body: any): Observable<any> {
    return this.http.post(environment.apiUrl + endpoint, body, this.apiHeader())
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }

  public apiPut(endpoint: string, body: any): Observable<any> {
    return this.http.put(environment.apiUrl + endpoint, body, this.apiHeader())
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }

  public apiPatch(endpoint: string, body: any): Observable<any> {
    return this.http.patch(environment.apiUrl + endpoint, body, this.apiHeader())
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }

  public apiDelete(endpoint: string): Observable<any> {
    return this.http.delete(environment.apiUrl + endpoint, this.apiHeader())
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }


  // Flickr api request
  public flickrSearchApiGet(searchItem: string): Observable<any> {
    return this.http.get(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${searchItem}&format=json&nojsoncallback=1`)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }

  // Trail API Methods
  public trailApiGet(endpoint: string): Observable<any> {
    return this.http.get('https://trailapi-trailapi.p.mashape.com/' + endpoint, this.trailHeader())
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }


  private trailHeader (): RequestOptions {
    const headers = new Headers()
    headers.append('X-Mashape-Key', 'BI4KvoJEXxmshqjI2TbFLM34KLqzp15xyvujsng1tHZBTzfDLv')
    headers.append('Accept', 'text/plain')
    return new RequestOptions({headers})
  }

  // Basic auth header
  private apiHeader (): RequestOptions {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (!currentUser) return
    const encodedUser = btoa(currentUser.email + ":" + currentUser.password)
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Basic ' + encodedUser)
    return new RequestOptions({headers})
  }

  // request error handler
  private handleError(error: apiErrors): Observable<apiErrors> {
        // error message returned as observable
        let errMsg: apiErrors
        if (error instanceof Response) {
            // if (typeof error._body === 'string') {
            //   const body = error._body
            //   errMsg = {
            //     message: body,
            //     status: error.status,
            //     statusText: error.statusText,
            //   }
            // } else {
              const body = error.json() || ''
              const err = body.error || JSON.stringify(body);
              errMsg = {
                message: err.message,
                status: error.status,
                statusText: error.statusText,
                stackHighlighted: err.stackHighlighted
              // }
            }
        } else {
            errMsg = {
              message: error.message ? error.message : error.toString()
            }
        }
        return Observable.throw(errMsg)
    }

}
