import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EquipmentInfoComponent} from './equipment-info.component';

describe('EquipmentInfoComponent', () => {
    let component: EquipmentInfoComponent;
    let fixture: ComponentFixture<EquipmentInfoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EquipmentInfoComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EquipmentInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
