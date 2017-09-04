import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMessageComponent } from './event-message.component';

describe('EventComponent', () => {
  let component: EventMessageComponent;
  let fixture: ComponentFixture<EventMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
