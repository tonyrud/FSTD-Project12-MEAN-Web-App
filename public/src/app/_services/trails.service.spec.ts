import { TestBed, inject } from '@angular/core/testing';

import { TrailsService } from './trails.service';

describe('TrailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrailsService]
    });
  });

  it('should be created', inject([TrailsService], (service: TrailsService) => {
    expect(service).toBeTruthy();
  }));
});
