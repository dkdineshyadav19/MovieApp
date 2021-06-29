import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NEtflixOriginalsComponent } from './netflix-originals.component';

describe('NEtflixOriginalsComponent', () => {
  let component: NEtflixOriginalsComponent;
  let fixture: ComponentFixture<NEtflixOriginalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NEtflixOriginalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NEtflixOriginalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
