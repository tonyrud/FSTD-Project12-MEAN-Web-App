import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '../../../_interfaces/location.interface';
import { LocationsService } from '../../../_services/locations.service';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @Input() location: Location

  @Output() saveLocation = new EventEmitter()

  constructor(
    private _locationService: LocationsService
  ) { }

  ngOnInit() {
    this._locationService.getLocationImage(this.location.name)
      .subscribe(data => {
        // check if images returned
        if (Object.keys(data).length) {
          // check if any items in returned images
          if (data.images.length) {
            // map over images and return image string
            this.location.images = data.images.map(image => image.media.m)
            // set imageLink to first element
            this.location.imageLink = this.location.images[0]
          } else {
            this.location.imageLink = ''
          }
        } else {
          this.location.imageLink = ''
        }
      })
  }

  submitSaveLocation(location: Location, event: Event) {
    event.stopPropagation()
    this.saveLocation.emit(location)
  }
}