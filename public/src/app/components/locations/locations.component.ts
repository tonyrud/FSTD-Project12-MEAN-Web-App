import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core'
import { TrailsService } from '../../_services/trails.service'
import { Location } from '../../_interfaces/location.interface';
import { LocationsService } from '../../_services/locations.service';
import { UsersService } from '../../_services/users.service';
import { User } from '../../_interfaces/user.interface';
import { Router } from '@angular/router';
import { routerTransition } from '../../_animations/router.animations';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class LocationsComponent implements OnInit, OnDestroy {

  users
  locations: Location
  selectedDistance = '25'
  selectedLimit = '5'
  searchValue = ''
  user: User
  distances = [
    { value: '10', viewValue: '10' },
    { value: '25', viewValue: '25' },
    { value: '50', viewValue: '50' },
    { value: '100', viewValue: '100' }
  ]
  resultsLimits = [
    { value: '5', viewValue: '5' },
    { value: '25', viewValue: '25' },
    { value: '50', viewValue: '50' }
  ]

  constructor(
    private _trailsService: TrailsService,
    private _locationsService: LocationsService,
    private _usersService: UsersService,
    private router: Router,
    private _alertService: AlertService
  ) { }

  ngOnInit() {
    this.user = this._usersService.getSignedUser()
  }

  onSearchChange() {
    this._trailsService.searchTrails(`?limit=${this.selectedLimit}&q[activities_activity_type_name_eq]=hiking&q[city_cont]=${this.searchValue}&radius=${this.selectedDistance}`).subscribe(trails => {
      this.locations = trails.places
    })

  }

  onInput(value: string) {
    this.searchValue = value
    this.onSearchChange()
  }

  onRange(value: string) {
    this.selectedDistance = value
    this.onSearchChange()
  }

  onTotalResults(value: string) {
    this.selectedLimit = value
    this.onSearchChange()
  }

  saveLocation(location: any) {
    this._locationsService.saveLocation(location)
      .subscribe(savedLocation => {
        this._alertService.showMessage('success', 'Success', 'Location saved to your profile')
      },
      error => {
        this._alertService.showMessage('error', 'Error', 'There was an issue saving location')
      })
  }

  locationClicked(location: Location): void {
    const query: any = this._locationsService.createLocationQuery(location)
    query.prevSearch = this.searchValue
    this.router.navigate(['/view-location'],
      {
        queryParams: query
      })
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    // this._locationsService.unsubscribe();
  }

}
