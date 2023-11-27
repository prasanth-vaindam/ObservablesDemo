import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  eventEmiter = new Subject<string>();

  data: string = '';
  emitData(data1: string) {
    //this.eventEmiter.emit(data);

    this.eventEmiter.next(data1);
  }
}
