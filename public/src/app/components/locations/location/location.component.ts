import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../../../_interfaces/location.interface';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @Input() location: Location

  constructor() { }

  ngOnInit() {
  }

}
