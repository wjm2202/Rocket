import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavphotoComponent } from './navphoto.component';

describe('NavphotoComponent', () => {
  let component: NavphotoComponent;
  let fixture: ComponentFixture<NavphotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavphotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
