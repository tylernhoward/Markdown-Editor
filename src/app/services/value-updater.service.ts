import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ValueUpdaterService {
    public nameObservable = new Subject<string>();

    constructor() { }
    emit(val) {
        this.nameObservable.next(val);
    }
}