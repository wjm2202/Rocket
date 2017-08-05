import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageShowComponent } from './image-show.component';

describe('ImageShowComponent', () => {
  let component: ImageShowComponent;
  let fixture: ComponentFixture<ImageShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
