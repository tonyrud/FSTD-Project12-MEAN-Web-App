import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '../../../_interfaces/location.interface';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @Input() location: Location

  @Output() saveLocation = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  submitSaveLocation (location: Location) {
    this.saveLocation.emit(location)
  }
}
