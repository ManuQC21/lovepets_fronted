import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";
import {LoginCreds} from "../../../../core/models/login-creds.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(creds: LoginCreds) {
    this.authService.login(creds).subscribe(res => {
      this.authService.saveUser(res);
      if (res.idAdmin) {
        console.log('asdasd')
        this.router.navigate(['/admin']);
      }
      else {
        this.router.navigate(['/adopter'])
      }
    });
  }

}
