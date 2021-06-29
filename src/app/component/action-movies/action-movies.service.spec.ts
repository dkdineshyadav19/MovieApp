import { TestBed } from '@angular/core/testing';

import { ActionMoviesService } from './action-movies.service';

describe('ActionMoviesService', () => {
  let service: ActionMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
