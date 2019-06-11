import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Day} from '../../../util/app.Day';

@Component({
    selector: 'teacher-schedule',
    templateUrl: './teacher-schedule.component.html',
    styleUrls: ['./teacher-schedule.component.css'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ]
})

export class TeacherScheduleComponent implements OnInit {
    dataSource = TEACHER_DATA;
    columnsToDisplay = ['name', 'specification', 'status'];
    expandedElement: Teacher | null;

    checkAvailable(days: Array<Day>): string {
        days.forEach(day => {
           let d = new Date();
            if (DAYS[d.getDay()] === day.name) {
                alert('yes');
            }
        });
        return 'Anwesend';
    }

    checkAvailability(element, column) {
        let color = 'black';
        if (column === 'status') {
            color = element['status'] === 'Anwesend' ? 'blue' : 'grey';
        }
        return color;
    }

    constructor() {
    }

    ngOnInit() {

    }

}

export interface Teacher {
    name: string;
    specification: string;
    available: Array<Day>;
    status: string;
}

const DAYS: Array<String> = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

// Contains the display Data
const TEACHER_DATA: Teacher[] = [
    {
        name: 'Patricia Engleitner',
        specification: 'Fotografie',
        available: [
            new Day('Montag', ['-']),
            new Day('Dienstag', ['08:00 - 12:45', '13:40 - 15:25']),
            new Day('Mittwoch', ['10:00 - 15:25']),
            new Day('Donnerstag', ['08:00 - 13:35', '14:35 - 15:25']),
            new Day('Freitag', ['08:55 - 11:45'])
        ],
        status: 'Anwesend' // TeacherScheduleComponent.prototype.checkAvailable(this.available)
    },
    {
        name: 'Erich Baar',
        specification: 'Audio',
        available: [
            new Day('Montag', ['-']),
            new Day('Dienstag', ['10:00 - 17:15']),
            new Day('Mittwoch', ['08:00 - 15:25']),
            new Day('Donnerstag', ['08:00 - 09:45', '10:55 - 11:45', '15:30 - 17:15']),
            new Day('Freitag', ['08:00 - 13:35'])
        ],
        status: 'Abwesend'
    },
    {
        name: 'Franz Rager',
        specification: 'Video',
        available: [
            new Day('Montag', ['08:00 - 11:45', '12:45 - 13:35']),
            new Day('Dienstag', ['-']),
            new Day('Mittwoch', ['08:00 - 15:25']),
            new Day('Donnerstag', ['08:00 - 11:45']),
            new Day('Freitag', ['08:00 - 13:35'])
        ],
        status: 'Abwesend'
    },
    {
        name: 'Martin Huemer',
        specification: 'Fotografie',
        available: [
            new Day('Montag', ['-']),
            new Day('Dienstag', ['08:00 - 12:40', '13:40 - 17:15']),
            new Day('Mittwoch', ['08:00 - 09:45', '11:50 - 15:25']),
            new Day('Donnerstag', ['08:00 - 09:45', '10:55 - 12:40', '14:35 - 17:15']),
            new Day('Freitag', ['08:00 - 12:40'])
        ],
        status: 'Abwesend'
    }
];
