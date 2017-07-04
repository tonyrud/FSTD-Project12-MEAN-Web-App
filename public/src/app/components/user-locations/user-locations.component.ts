import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../_services/locations.service';
import { Location } from '../../_interfaces/location.interface';

@Component({
  selector: 'user-locations',
  templateUrl: './user-locations.component.html',
  styleUrls: ['./user-locations.component.scss']
})
export class UserLocationsComponent implements OnInit {
  userLocations: Location[]

  constructor(
    private _locationsService: LocationsService
  ) { }

  ngOnInit() {
    this._locationsService.getUserLocations()
      .subscribe(data => {
        this.userLocations = data.locations
      })
  }

}
