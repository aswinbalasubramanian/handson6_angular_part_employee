import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee/employee.item';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:5000/api/auth/';
  token: string;

  constructor(private http: HttpClient) { }

  authUser(name: string, pass: string){
    var head = new HttpHeaders({
    'Content-Type': 'application/json',
    'responseType': 'json',
    'observe': 'body'
  });
    let userId: Number;

    if(name===pass)   // when both username and password are equal, the user can login
      userId=1;
    else
      userId=-1;
    return this.http.get<User>(this.url+userId,{headers: head});
  }

  setData(user: User){
    this.token = user.token;
    
    window.localStorage.setItem('token',user.token);
   
  }

  getToken(){
    return window.localStorage.getItem('token');
  }
}
