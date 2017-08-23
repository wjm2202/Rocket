import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorCaraComponent } from './sponsor-cara.component';

describe('SponsorCaraComponent', () => {
  let component: SponsorCaraComponent;
  let fixture: ComponentFixture<SponsorCaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorCaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorCaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
