import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutereadmoreComponent } from './institutereadmore.component';

describe('InstitutereadmoreComponent', () => {
  let component: InstitutereadmoreComponent;
  let fixture: ComponentFixture<InstitutereadmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutereadmoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutereadmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
