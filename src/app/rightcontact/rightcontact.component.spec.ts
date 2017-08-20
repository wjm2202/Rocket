/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RightcontactComponent } from './rightcontact.component';

describe('RightcontactComponent', () => {
  let component: RightcontactComponent;
  let fixture: ComponentFixture<RightcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
