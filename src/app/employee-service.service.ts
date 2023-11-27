import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  private url: string = 'assets/employee.json';
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.url);
  }
}
