import { TestBed } from '@angular/core/testing';

import { ComedyService } from './comedy.service';

describe('ComedyService', () => {
  let service: ComedyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComedyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
