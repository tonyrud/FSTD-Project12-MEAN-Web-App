import { Injectable } from '@angular/core';
import { RequestsService } from './requests.service';
import { Location } from '../_interfaces/location.interface';

@Injectable()
export class LocationsService {

  constructor(
    private _reqService: RequestsService
  ) { }
  
  saveLocation(location: Location) {
    return this._reqService.apiPost(`locations/${location.unique_id}`, location)
  }

  getLocationImage(locationName: string) {
    return this._reqService.apiGet(`/locations/image/` + locationName)
    // return this._reqService.flickrSearchApiGet(locationName)
  }
}
