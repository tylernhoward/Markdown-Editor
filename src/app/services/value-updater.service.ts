import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ValueUpdaterService {
    public nameObservable = new Subject<string>();
    public textObservable = new Subject<string>();


    constructor() { }
    emitName(val) {
        this.nameObservable.next(val);
    }
    emitText(val) {
        this.textObservable.next(val);
    }


}