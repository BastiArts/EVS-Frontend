import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BringbackDialogComponent } from './bringback-dialog.component';

describe('BringbackDialogComponent', () => {
  let component: BringbackDialogComponent;
  let fixture: ComponentFixture<BringbackDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BringbackDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BringbackDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
