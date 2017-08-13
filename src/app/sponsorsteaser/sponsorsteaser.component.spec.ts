import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsteaserComponent } from './sponsorsteaser.component';

describe('SponsorsteaserComponent', () => {
  let component: SponsorsteaserComponent;
  let fixture: ComponentFixture<SponsorsteaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorsteaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsteaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
