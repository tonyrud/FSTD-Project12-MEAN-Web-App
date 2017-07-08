import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertService } from '../../_services/alert.service';
import { Message } from 'primeng/primeng';
import { slideIn } from '../../_animations/slideInOut.animation';
import { routerTransition } from '../../_animations/router.animations';

@Component({
  selector: 'alert',
  template: `<p-growl [(value)]="message"></p-growl>`,
  styles: ['']
})
export class AlertComponent implements OnInit {

  message: Message[] = []

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    // subscribe to message service subject
    this.alertService.getMessage().subscribe(message => {
      // clear previous message data
      this.message = []
      // check if message data exists
      if (message) {
        this.message.push(message)
      }
    });
  }
}
