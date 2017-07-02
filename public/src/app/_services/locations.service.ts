import { Injectable } from '@angular/core';
import { RequestsService } from './requests.service';
import { Location } from '../_interfaces/location.interface';

@Injectable()
export class LocationsService {

  constructor(
    private _reqService: RequestsService
  ) { }
  
  saveLocation(location: Location, userId: string) {
    return this._reqService.apiPost(`locations/${userId}/${location.unique_id}`, location)
  }
}
