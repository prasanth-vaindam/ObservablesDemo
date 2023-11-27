import { Component } from '@angular/core';
import { Observable, filter, from, map } from 'rxjs';
import { EmployeeServiceService } from './employee-service.service';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private employeeService: EmployeeServiceService) {}
  title = 'ObservablesDemo';
  arr: string[] = [];
  employees: Employee[] = [];
  // myObesrvable = new Observable((observer) => {
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  array: any = [10, 20, 30, 60, 50];
  // myObesrvable = new Observable((observer) => {
  //   setTimeout(() => {
  //     observer.next(1);
  //   }, 1000);

  // });
  myObservable = from(this.array);
  myObservable1 = this.myObservable.pipe(
    map((val: any) => {
      return val * 5;
    }),
    filter((val: any) => {
      return val > 200;
    })
  );

  // myObservable2 = this.myObservable1.pipe(
  //   filter((val: any) => {
  //     return val > 200;
  //   })
  // );

  ngOnInit() {
    this.myObservable1.subscribe(
      (data: any) => {
        this.arr.push(data + '');
        console.log(data);
      },
      (error) => {
        alert(error.message);
      },
      () => {
        alert('Obserable has completed all the values');
      }
    );
    this.employeeService.getData().subscribe((data) => {
      this.employees = data;
    });
  }
}
