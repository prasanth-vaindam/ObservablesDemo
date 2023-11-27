import { Component } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css'],
})
export class CompOneComponent {
  transferData: string = '';
  constructor(private serviceObj: MyService) {}
  submitData() {
    this.serviceObj.emitData(this.transferData);
  }
}
