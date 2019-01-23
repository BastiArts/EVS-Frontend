import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsBoardComponent } from './students-board.component';

describe('StudentsBoardComponent', () => {
  let component: StudentsBoardComponent;
  let fixture: ComponentFixture<StudentsBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
