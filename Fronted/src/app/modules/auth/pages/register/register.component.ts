import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";
import {Router} from "@angular/router";
import {RegisterCreds} from "../../../../core/models/register-creds.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(creds: RegisterCreds) {
    this.authService.register(creds).subscribe(res => {
      this.authService.saveUser(res);
      this.router.navigate(['/'])
    })
  }

  register(creds: RegisterCreds) {
    this.authService.register(creds).subscribe(res => {
      this.authService.saveUser(res);
      this.router.navigate(['/home'])
    });
  }
}
