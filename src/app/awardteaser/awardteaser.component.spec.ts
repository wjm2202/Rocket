import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardteaserComponent } from './awardteaser.component';

describe('AwardteaserComponent', () => {
  let component: AwardteaserComponent;
  let fixture: ComponentFixture<AwardteaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardteaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardteaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
