import { Component, OnInit } from '@angular/core'
import { TrailsService } from '../../_services/trails.service'
import { Location } from '../../_interfaces/location.interface';
import { LocationsService } from '../../_services/locations.service';
import { UsersService } from '../../_services/users.service';
import { User } from '../../_interfaces/user.interface';

@Component({
  selector: 'locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  users
  locations: Location
  selectedDistance = '25'
  selectedLimit = '5'
  searchValue = 'Seattle'
  user: User
  distances = [
    {value: '10', viewValue: '10'},
    {value: '25', viewValue: '25'},
    {value: '50', viewValue: '50'},
    {value: '100', viewValue: '100'}
  ]
  resultsLimits = [
    {value: '5', viewValue: '5'},
    {value: '25', viewValue: '25'},
    {value: '50', viewValue: '50'}
  ]

  constructor(
    private _trails: TrailsService,
    private _locations: LocationsService,
    private _users: UsersService
  ) { }

  ngOnInit() {
    this.onSearchChange()
    this.user = this._users.getSignedUser()
    this._users.getUsers().subscribe(users =>{
      this.users = users
      console.log(this.users)
    })
  }

  onSearchChange() {
    this._trails.testTrailApi(`?limit=${this.selectedLimit}&q[activities_activity_type_name_eq]=hiking&q[city_cont]=${this.searchValue}&radius=${this.selectedDistance}`).subscribe(trails => {
      console.log(trails.places)
      this.locations = trails.places
    })

  }

  onInput (value: string) {
    this.searchValue = value
    this.onSearchChange()
  }

  onRange (value: string) {
    this.selectedDistance = value
    this.onSearchChange()
  }

  onTotalResults (value: string) {
    this.selectedLimit = value
    this.onSearchChange()
  }

  saveLocation (location: Location) {
    this._locations.saveLocation(location, this.user._id).subscribe(savedLocation => {
      console.log('returned save!', savedLocation)
    },
    error => {
      console.log('error in save location: ', error)
    })
  }

}
