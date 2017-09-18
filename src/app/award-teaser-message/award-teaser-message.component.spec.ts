import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardTeaserMessageComponent } from './award-teaser-message.component';

describe('AwardTeaserMessageComponent', () => {
  let component: AwardTeaserMessageComponent;
  let fixture: ComponentFixture<AwardTeaserMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardTeaserMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardTeaserMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
