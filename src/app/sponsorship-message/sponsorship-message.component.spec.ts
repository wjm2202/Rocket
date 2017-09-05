import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorshipMessageComponent } from './sponsorship-message.component';

describe('SponsorshipMessageComponent', () => {
  let component: SponsorshipMessageComponent;
  let fixture: ComponentFixture<SponsorshipMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorshipMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorshipMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
