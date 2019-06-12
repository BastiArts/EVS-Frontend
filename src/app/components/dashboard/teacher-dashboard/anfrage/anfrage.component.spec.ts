import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AnfrageComponent} from './anfrage.component';

describe('AnfrageComponent', () => {
    let component: AnfrageComponent;
    let fixture: ComponentFixture<AnfrageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AnfrageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AnfrageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
