import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactteaserComponent } from './contactteaser.component';

describe('ContactteaserComponent', () => {
  let component: ContactteaserComponent;
  let fixture: ComponentFixture<ContactteaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactteaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactteaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
