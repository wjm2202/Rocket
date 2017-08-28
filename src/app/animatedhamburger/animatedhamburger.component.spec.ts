import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedhamburgerComponent } from './animatedhamburger.component';

describe('AnimatedhamburgerComponent', () => {
  let component: AnimatedhamburgerComponent;
  let fixture: ComponentFixture<AnimatedhamburgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedhamburgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedhamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
