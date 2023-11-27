import { Component } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css'],
})
export class CompTwoComponent {
  constructor(private serviceObj: MyService) {}

  req: string = '';
  ngOnInit() {
    this.serviceObj.eventEmiter.subscribe((data: any) => {
      this.req = data;
    });
  }
}
