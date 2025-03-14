import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyFeaturedComponent } from './daily-featured.component';

describe('DailyFeaturedComponent', () => {
  let component: DailyFeaturedComponent;
  let fixture: ComponentFixture<DailyFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyFeaturedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
