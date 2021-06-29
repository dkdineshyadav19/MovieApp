import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvMoviesComponent } from './tv-movies.component';

describe('TvMoviesComponent', () => {
  let component: TvMoviesComponent;
  let fixture: ComponentFixture<TvMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
