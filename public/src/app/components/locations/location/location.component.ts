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
        if (data.images) {
          this.location.images = data.images.map(image => {
            return image.media.m || 'https://placeholdit.co//i/555x350'
          })
          this.location.imageLink = this.location.images[0]

        }
      })
  }

  submitSaveLocation (location: Location) {
    this.saveLocation.emit(location)
  }
}