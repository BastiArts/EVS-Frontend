export class LogEntry {
    constructor(
        public timestamp: string,
        public status: string,
        public user: string,
        public equipment: string
    ) {
    }
}
