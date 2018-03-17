import { Injectable } from '@angular/core';

@Injectable()
export class CloseNavService {

    closer: any;

    constructor() {
    }

    setCloser(closer: any) {
        this.closer = closer;
    }

    close() {
        this.closer();
    }
}
