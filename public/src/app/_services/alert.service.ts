import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {
  private subject = new Subject<any>();

  constructor(private router: Router) { }

  showMessage(severity: string, messageSummary: string, message: string) {
    /*
    Possible error message severity:
      - success
      - info
      - warn
      - error
    */
    this.subject.next({ severity: severity, summary: messageSummary, detail: message });
  }

  // creates subject observable for template views
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}