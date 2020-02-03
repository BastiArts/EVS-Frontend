import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourConfirmationTeacherComponent } from './retour-confirmation-teacher.component';

describe('RetourConfirmationTeacherComponent', () => {
  let component: RetourConfirmationTeacherComponent;
  let fixture: ComponentFixture<RetourConfirmationTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetourConfirmationTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetourConfirmationTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
