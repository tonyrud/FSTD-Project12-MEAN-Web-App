import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../_services/locations.service';
import { Location } from '../../_interfaces/location.interface';
import { Router } from '@angular/router';
import { fadeInAnimation } from '../../_animations/fadeIn.animation';
import { routerTransition } from '../../_animations/router.animations';
import { trigger, state, animate, style, transition, stagger, query } from '@angular/animations';

@Component({
  selector: 'user-locations',
  templateUrl: './user-locations.component.html',
  styleUrls: ['./user-locations.component.scss'],
  animations: [routerTransition(),
    trigger('listAnimation', [
  transition('* => *', [ // each time the binding value changes
    query(':leave', [
      stagger(100, [
        animate('1.5s', style({ opacity: 0 }))
      ])
    ], {optional: true}),
    query(':enter', [
      style({ opacity: 0 }),
      stagger(1000, [
        animate('1.5s', style({ opacity: 1 }))
      ])
    ], {optional: true})
  ])
])
   ],
  host: {'[@routerTransition]': ''}
})
export class UserLocationsComponent implements OnInit {
  userLocations: Location[]
  items = []

  constructor(
    private _locationsService: LocationsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.items = ['hey', 'there', 'this is animated']
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
