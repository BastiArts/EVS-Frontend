import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPreviewComponent } from './equipment-preview.component';

describe('EquipmentPreviewComponent', () => {
  let component: EquipmentPreviewComponent;
  let fixture: ComponentFixture<EquipmentPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
