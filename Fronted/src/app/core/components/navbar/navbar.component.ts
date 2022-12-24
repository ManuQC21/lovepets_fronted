import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser$: Observable<User | null>;
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService
  ) {
    this.currentUser$ = authService.user$;
  }

  ngOnInit(): void {

  }

  logout() {
    this.authService.logout();
  }

}
