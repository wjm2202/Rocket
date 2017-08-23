import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignsponsorComponent } from './signsponsor.component';

describe('SignsponsorComponent', () => {
  let component: SignsponsorComponent;
  let fixture: ComponentFixture<SignsponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignsponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignsponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
