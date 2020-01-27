import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { EquAnzeigenComponent } from './equ-anzeigen.component';

describe('EquAnzeigenComponent', () => {
  let component: EquAnzeigenComponent;
  let fixture: ComponentFixture<EquAnzeigenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquAnzeigenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquAnzeigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
