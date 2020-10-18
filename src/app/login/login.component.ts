import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authorization/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'admin';     //login username: admin and password: admin hardcoded
  password: string = 'admin';

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.username+' '+this.password);
    console.log('hi');
    this.authService.authUser(this.username, this.password).subscribe(
      res => {
        let user = res;
        this.authService.setData(user);
        this.route.navigateByUrl('/view-employees');
      },
      err => console.log(err)
    );
  }
}
