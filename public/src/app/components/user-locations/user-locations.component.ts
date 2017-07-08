import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../_services/locations.service';
import { Location } from '../../_interfaces/location.interface';
import { Router } from '@angular/router';
import { routerTransition } from '../../_animations/router.animations';

import { slideIn, slideInList } from '../../_animations/slideInOut.animation';

import { Message } from 'primeng/primeng';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'user-locations',
  templateUrl: './user-locations.component.html',
  styleUrls: ['./user-locations.component.scss'],
  animations: [
    routerTransition(),
    slideIn()
  ],
  host: { '[@routerTransition]': '' }
})
export class UserLocationsComponent implements OnInit {
  userLocations: Location[]
  items = []
  msgs: Message[] = [];

  constructor(
    private _locationsService: LocationsService,
    private router: Router,
    private _alertService: AlertService
  ) {

  }

  ngOnInit() {
    // this.items = ['hey', 'there', 'this is animated']
    this.loadUserLocations()
  }


  showSuccess() {
    // this.msgs = [];
    this._alertService.showMessage('error', 'Error message', 'Order submitted')
    // this.msgs.push({ severity: 'error', summary: 'Success Message', detail: 'Order submitted' });
  }

  removeLocation(location: Location, event: Event) {
    event.stopPropagation()
    this._locationsService.deleteUserLocation(location).subscribe(savedLocation => {
      console.log('location removed', savedLocation)
      this.loadUserLocations()
    },
      error => {
        console.log('error in remove location: ', error)
      })
  }

  locationClicked(location: Location): void {
    const query = this._locationsService.createLocationQuery(location)
    this.router.navigate(['/view-location'],
      {
        queryParams: query
      })
  }

  private loadUserLocations() {
    this._locationsService.getUserLocations()
      .subscribe(data => {
        this.userLocations = data.locations
      })
  }

}
