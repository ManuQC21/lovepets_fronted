import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {LoginCreds} from "../models/login-creds.model";
import {User} from "../models/user.model";
import {RegisterCreds} from "../models/register-creds.model";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mockedUser: User = {
    username: 'QuispeC',
    id: '12345',
    token: ':)'
  }

  url: string = environment.baseUrl + '/auth'

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    const user = localStorage.getItem('user');
    if (user) {
      this.userDataSource.next(JSON.parse(user));
    }
  }

  private userDataSource: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public user$ = this.userDataSource.asObservable();

  public login(loginCreds: LoginCreds): Observable<User> {
    let loginUrl = this.url + '/login';
    return this.http.post<User>(
      loginUrl,
      loginCreds
    );
    // return new Observable<User>((subscriber) => {
    //   setTimeout(() => {
    //     subscriber.next(this.mockedUser);
    //     subscriber.complete();
    //   }, 1000);
    // })
  };

  public register(registerCreds: RegisterCreds): Observable<User> {
    return new Observable<User>((subscriber) => {
      setTimeout(() => {
        subscriber.next(this.mockedUser);
        subscriber.complete();
      }, 1000);
    })
  };

  public saveUser(user: User) {
    this.userDataSource.next(user);
    this.saveUserToLocalStorage(user);
  }

  public logout() {
    localStorage.removeItem('user');
    this.userDataSource.next(null);
    this.router.navigate(['auth/login']);
  };

  private saveUserToLocalStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

}
