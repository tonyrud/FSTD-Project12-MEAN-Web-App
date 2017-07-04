import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLocationsComponent } from './user-locations.component';

describe('UserLocationsComponent', () => {
  let component: UserLocationsComponent;
  let fixture: ComponentFixture<UserLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
