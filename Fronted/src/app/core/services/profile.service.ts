import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {Profile} from "../models/profile.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url: string = environment.baseUrl + '/adoptante';

  constructor(
    private http: HttpClient
  ) {
  }

  createProfile(profile: Profile): Observable<Profile> {
    return new Observable<Profile>((subscriber) => {
      setTimeout(() => {
        subscriber.next(profile);
        subscriber.complete();
      }, 1000);
    })
  }

  updateProfile(profile: Profile): Observable<Profile> {
    return new Observable<Profile>((subscriber) => {
      setTimeout(() => {
        subscriber.next(profile);
        subscriber.complete();
      }, 1000);
    })
  }

  getProfile(id: string): Observable<Profile> {
    return new Observable<Profile>((subscriber) => {
      setTimeout(() => {
        let profile = localStorage.getItem('profile');
        if (profile) {
          subscriber.next(JSON.parse(profile));
        }
        else {
          const error = new HttpErrorResponse({ status: 422 });
          subscriber.error(error);
        }
        subscriber.complete();
      }, 1000);
    })
  }

  getByAdoptanteId(id: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.url}/perfil/${id}`);
  }
}
