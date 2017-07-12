import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '../../_interfaces/location.interface';
import { TrailsService } from '../../_services/trails.service';
import { routerTransition } from '../../_animations/router.animations';
import { slideIn } from '../../_animations/slideInOut.animation';

@Component({
  selector: 'view-component',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.scss'],
  animations: [
    routerTransition(),
    slideIn(1000, 100, 'ease-out', 300)
  ],
  host: { '[@routerTransition]': '' }
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
          this.location.image = params.image
        })
      })
  }

}
