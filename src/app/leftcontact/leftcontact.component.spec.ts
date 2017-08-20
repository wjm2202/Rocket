/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LeftcontactComponent } from './leftcontact.component';

describe('LeftcontactComponent', () => {
  let component: LeftcontactComponent;
  let fixture: ComponentFixture<LeftcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
