import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentreadmoreComponent } from './studentreadmore.component';

describe('StudentreadmoreComponent', () => {
  let component: StudentreadmoreComponent;
  let fixture: ComponentFixture<StudentreadmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentreadmoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentreadmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
