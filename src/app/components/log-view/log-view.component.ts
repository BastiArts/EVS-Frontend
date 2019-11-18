import {Component, OnInit} from '@angular/core';
import {LogEntry} from '../../log-entry';
import {HttpService} from '../../../../services/services/http.service';

@Component({
    selector: 'app-log-view',
    templateUrl: './log-view.component.html',
    styleUrls: ['./log-view.component.css']
})
export class LogViewComponent implements OnInit {
    private entries: Array<LogEntry> = [];
    private filteredEntries: Array<LogEntry> = [];
    private logs: Array<string> = [];

    constructor(private http: HttpService) {
    }

    ngOnInit() {
        this.http.getLogs().subscribe(res => {
            this.logs = res;
        });
    }

    filterLog(filter: string) {
        this.filteredEntries = this.entries;
        if (filter !== '') {
            this.filteredEntries = this.filteredEntries.filter(e => e.status === filter);
        }
    }

    formatStatus(status: string) {
        switch (status.toLowerCase()) {
            case 'ausborgen':
                return '<span class = "ausgeborgt">' + status.toUpperCase() + '</span>';
            case 'retour':
                return '<span class = "retour">' + status.toUpperCase() + '</span>';
            case 'reserviert':
                return '<span class = "reserviert">' + status.toUpperCase() + '</span>';
            default:
                break;
        }
    }

    switchLogs(logFileName: string) {
        this.http.getLogByName(logFileName).subscribe(logs => {
            this.entries = logs;
            this.filteredEntries = this.entries;
        });
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
