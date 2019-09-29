import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstShowComponent } from './gst-show.component';

describe('GstShowComponent', () => {
  let component: GstShowComponent;
  let fixture: ComponentFixture<GstShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
