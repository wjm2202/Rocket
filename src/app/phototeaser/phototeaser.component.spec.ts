import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhototeaserComponent } from './phototeaser.component';

describe('PhototeaserComponent', () => {
  let component: PhototeaserComponent;
  let fixture: ComponentFixture<PhototeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhototeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhototeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
