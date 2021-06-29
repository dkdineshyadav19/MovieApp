import { TestBed } from '@angular/core/testing';

import { RomanceService } from './romance.service';

describe('RomanceService', () => {
  let service: RomanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
