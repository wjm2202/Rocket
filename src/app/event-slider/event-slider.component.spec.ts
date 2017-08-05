import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSliderComponent } from './event-slider.component';

describe('EventSliderComponent', () => {
  let component: EventSliderComponent;
  let fixture: ComponentFixture<EventSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
