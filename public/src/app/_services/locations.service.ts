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

  getUserLocations() {
    return this._reqService.apiGet(`locations/account`)
  }

  deleteUserLocation(locationId: Location) {
    return this._reqService.apiDelete(`locations/${locationId.unique_id}`)
  }

  getLocationImage(locationName: string) {
    // using node server for api call due to local dev CORS
    return this._reqService.apiGet(`locations/image/` + locationName)
  }

  createLocationQuery (locationData: Location) {
    const parsedActivites = this.parseLocationActivities(locationData)
    return {
          name: locationData.name,
          description: locationData.description,
          lat: locationData.lat,
          lon: locationData.lon,
          city: locationData.city,
          country: locationData.country,
          state: locationData.state,
          image: locationData.imageLink,
          activitiesNames: parsedActivites.names,
          activitiesUrls: parsedActivites.url,
          activitiesDescriptions: parsedActivites.description
    }
  }

  parseLocationActivities (location: Location) {
    return {
      names: location.activities.map(item => item.name),
      url: location.activities.map(item => item.url),
      description: location.activities.map(item => item.description)
    }
  }
}
