import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../../../services/services/data.service';
import {HttpService} from '../../../../../services/services/http.service';

@Component({
    selector: 'equipmentChart',
    templateUrl: './equipment-chart.component.html',
    styleUrls: ['./equipment-chart.component.css']
})
export class EquipmentChartComponent implements OnInit {

    chart = {
        title: '',
        type: 'PieChart',
        data: [],
        options: {
            width: 500,
            height: 250,
            colors: ['#3d5afe', '#8187ff', '#1976d2', '#74aef3', '#63a4ff'],
            pieSliceText: 'value'
        }
    };

    constructor(private dataService: DataService, private http: HttpService) {
    }

    ngOnInit() {
        this.loadAvailableEquipment();
    }

    loadAvailableEquipment() {
        this.http.fetchAvailableEquipment().subscribe(res => {
            const availableEquipment = res;

            const categories = {
                audio: 0,
                video: 0,
                camera: 0
            };
            for (const ae of availableEquipment) {
                console.log(ae.category);
                if (ae.category === 'audio') {
                    categories.audio += 1;
                } else if (ae.category === 'video') {
                    categories.video += 1;
                } else if (ae.category === 'camera') {
                    categories.camera += 1;
                }
            }
            this.chart.data = [
                ['Kamera', categories.camera],
                ['Videokamera', categories.video],
                ['Audio', categories.audio],
                ['Zubehör', 1]
            ];
        });
    }
}
