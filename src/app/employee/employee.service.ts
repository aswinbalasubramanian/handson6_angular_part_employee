import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../authorization/auth.service';
import { Employee } from './employee.item';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string = 'http://localhost:5000/api/employees/';
  head: HttpHeaders;

  constructor(private http: HttpClient, private authService: AuthService) { }

  getHeaders(){
    this.head = new HttpHeaders({
      'Authorization' : 'bearer '+ this.authService.getToken()
    });
  }

  getEmployees(){
    return this.http.get<Employee[]>(this.url, {headers: this.head});
  }

  addEmployee(emp: Employee){
    return this.http.post(this.url,emp,{headers: this.head});
  }
}
