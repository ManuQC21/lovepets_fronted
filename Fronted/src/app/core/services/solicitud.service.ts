import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SolicitudModel} from "../models/solicitud.model";

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  url: string = environment.baseUrl + '/requests'
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<SolicitudModel[]> {
    return this.http.get<SolicitudModel[]>(this.url);
  }
  getById(id: string): Observable<SolicitudModel> {
    return this.http.get<SolicitudModel>(`${this.url}/${id}`);
  }
}
