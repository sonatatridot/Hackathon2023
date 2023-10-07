import { TestBed } from '@angular/core/testing';

import { ParkingInfoService } from './parking-info.service';

describe('ParkingInfoService', () => {
  let service: ParkingInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
