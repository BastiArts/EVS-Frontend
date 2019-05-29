import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EquipmentChartComponent} from './equipment-chart.component';

describe('EquipmentChartComponent', () => {
    let component: EquipmentChartComponent;
    let fixture: ComponentFixture<EquipmentChartComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EquipmentChartComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EquipmentChartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
