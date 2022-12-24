import {Component, OnInit} from '@angular/core';
import {Profile} from "../../../../core/models/profile.model";
import {ProfileService} from "../../../../core/services/profile.service";
import {catchError, ignoreElements, Observable, of} from "rxjs";
import {User} from "../../../../core/models/user.model";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user$: Observable<User | null>;
  profile$: Observable<Profile>;
  profileError$: Observable<any>;

  constructor(
    private profileService: ProfileService,
    private authService: AuthService
  ) {
    this.user$ = authService.user$;
    // @ts-ignore
    const user = JSON.parse(localStorage.getItem('user'));
    this.profile$ = profileService.getProfile(user.id);
    this.profileError$ = this.profile$.pipe(
      ignoreElements(),
      catchError((err) => {
        return of(err)
      })
    );
  }

  ngOnInit(): void {
  }

  onFormSubmit(profile: Profile) {
    console.log(profile)
  }

  createProfile(profile: Profile) {

  }

  updateProfile(profile: Profile) {

  }

}
