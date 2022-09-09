import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelctedMovieComponent } from './selcted-movie.component';

describe('SelctedMovieComponent', () => {
  let component: SelctedMovieComponent;
  let fixture: ComponentFixture<SelctedMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelctedMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelctedMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
