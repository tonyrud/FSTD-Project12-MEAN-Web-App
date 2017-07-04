import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../_services/locations.service';
import { Location } from '../../_interfaces/location.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'user-locations',
  templateUrl: './user-locations.component.html',
  styleUrls: ['./user-locations.component.scss']
})
export class UserLocationsComponent implements OnInit {
  userLocations: Location[]

  constructor(
    private _locationsService: LocationsService,
    private router: Router
  ) { }

  ngOnInit() {
    this._locationsService.getUserLocations()
      .subscribe(data => {
        this.userLocations = data.locations
      })
  }

  removeLocation(location: Location) {
    this._locationsService.saveLocation(location).subscribe(savedLocation => {
      console.log('returned save!', savedLocation)
    },
      error => {
        console.log('error in save location: ', error)
      })
  }

  locationClicked(location: Location): void {
    const query = this._locationsService.createLocationQuery(location)
    this.router.navigate(['/view-location'],
      {
        queryParams: query
      })
  }

}
