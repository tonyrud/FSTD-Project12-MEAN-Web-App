import { Injectable } from '@angular/core';
import { RequestsService } from './requests.service';

@Injectable()
export class TrailsService {

  constructor(
    private _req: RequestsService
  ) { }

  searchTrails(searchParams: string) {
    return this._req.trailApiGet(searchParams)
  }
}
