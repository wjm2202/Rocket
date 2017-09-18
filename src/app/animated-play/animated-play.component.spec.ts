import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedPlayComponent } from './animated-play.component';

describe('AnimatedPlayComponent', () => {
  let component: AnimatedPlayComponent;
  let fixture: ComponentFixture<AnimatedPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
