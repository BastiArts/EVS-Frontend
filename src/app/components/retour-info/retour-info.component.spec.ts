import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourInfoComponent } from './retour-info.component';

describe('RetourInfoComponent', () => {
  let component: RetourInfoComponent;
  let fixture: ComponentFixture<RetourInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetourInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetourInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
