import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authorization/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) { 
    authService.token=undefined;
    window.localStorage.clear();
    route.navigateByUrl('/login');
  }

  ngOnInit(): void {
  }

}
