import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '../../_interfaces/location.interface';
import { TrailsService } from '../../_services/trails.service';

@Component({
  selector: 'view-component',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.scss']
})
export class ViewLocationComponent implements OnInit {
  location: any
  activities: any

  constructor(
    private route: ActivatedRoute,
    private _trailsService: TrailsService
  ) { }

  ngOnInit() {

    this.route.queryParams
      .subscribe((params: any) => {
        this._trailsService.searchTrails(`?lat=${params.lat}&limit=5&lon=${params.lon}&q[activities_activity_type_name_eq]=hiking&radius=1`).subscribe(location => {
          this.location = location.places[0]
          console.log(this.location)
        })
      })
  }

  parseLocationParams (locationParams: any) {
    const parsed = locationParams.activitiesNames.map((item, index: number) => {
      return {
        name: item,
        url: locationParams.activitiesUrls[index],
        description: locationParams.activitiesDescriptions[index],
      }
    })
    return parsed
  }

}
