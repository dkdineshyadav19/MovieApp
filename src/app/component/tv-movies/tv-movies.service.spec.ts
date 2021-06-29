import { TestBed } from '@angular/core/testing';

import { TvMoviesService } from './tv-movies.service';

describe('TvMoviesService', () => {
  let service: TvMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
