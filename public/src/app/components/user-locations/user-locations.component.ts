import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../_services/locations.service';
import { Location } from '../../_interfaces/location.interface';
import { Router } from '@angular/router';
import { fadeInAnimation } from '../../_animations/fadeIn.animation';
import { routerTransition } from '../../_animations/router.animations';

@Component({
  selector: 'user-locations',
  templateUrl: './user-locations.component.html',
  styleUrls: ['./user-locations.component.scss'],
  animations: [routerTransition() ],
  host: {'[@routerTransition]': ''}
})
export class UserLocationsComponent implements OnInit {
  userLocations: Location[]

  constructor(
    private _locationsService: LocationsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadUserLocations()
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
