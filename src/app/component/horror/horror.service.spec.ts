import { TestBed } from '@angular/core/testing';

import { HorrorService } from './horror.service';

describe('HorrorService', () => {
  let service: HorrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
