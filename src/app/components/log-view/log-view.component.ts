import {Component, OnInit} from '@angular/core';
import {LogEntry} from '../../log-entry';

@Component({
    selector: 'app-log-view',
    templateUrl: './log-view.component.html',
    styleUrls: ['./log-view.component.css']
})
export class LogViewComponent implements OnInit {
    private entries: Array<LogEntry> = [];
    private filteredEntries: Array<LogEntry> = [];

    constructor() {
    }

    ngOnInit() {
        this.initEntries();
    }

    filterLog(filter: string) {
        this.filteredEntries = this.entries;
        if (filter !== '') {
            this.filteredEntries = this.filteredEntries.filter(e => e.status === filter);
        }
    }

    formatStatus(status: string) {
        switch (status.toLowerCase()) {
            case 'ausgeborgt':
                return '<span class = "ausgeborgt">' + status.toUpperCase() + '</span>';
            case 'retour':
                return '<span class = "retour">' + status.toUpperCase() + '</span>';
            case 'reserviert':
                return '<span class = "reserviert">' + status.toUpperCase() + '</span>';
            default:
                break;
        }
    }

    initEntries() {
        this.entries.push(new LogEntry(
            '07.10.2019 09:10:44',
            'AUSGEBORGT',
            'Sebastian Schiefermayr',
            'Panasonic GH4'));
        this.entries.push(new LogEntry(
            '07.10.2019 09:10:44',
            'AUSGEBORGT',
            'Sebastian Schiefermayr',
            'Panasonic GH4'));
        this.entries.push(new LogEntry(
            '07.10.2019 09:10:44',
            'AUSGEBORGT',
            'Sebastian Schiefermayr',
            'Panasonic GH4'));
        this.entries.push(new LogEntry(
            '07.10.2019 09:10:44',
            'RESERVIERT',
            'Sebastian Schiefermayr',
            'Panasonic GH4'));
        this.filteredEntries = this.entries;
    }
}
