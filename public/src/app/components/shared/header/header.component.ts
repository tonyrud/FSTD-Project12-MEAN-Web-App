import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../../../_services/app.config.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private title: string

  constructor(
    private config: AppConfigService
  ) { }

  ngOnInit() {
    this.title = this.config.appName
  }

}
