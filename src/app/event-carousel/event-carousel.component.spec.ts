import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCarouselComponent } from './event-carousel.component';

describe('EventCarouselComponent', () => {
  let component: EventCarouselComponent;
  let fixture: ComponentFixture<EventCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
