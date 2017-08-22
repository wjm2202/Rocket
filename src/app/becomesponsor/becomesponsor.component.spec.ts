import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomesponsorComponent } from './becomesponsor.component';

describe('BecomesponsorComponent', () => {
  let component: BecomesponsorComponent;
  let fixture: ComponentFixture<BecomesponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomesponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomesponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
