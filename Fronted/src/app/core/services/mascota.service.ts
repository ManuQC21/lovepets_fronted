import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {MascotaModel} from "../models/mascota.model";

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  url: string = environment.baseUrl + '/pets'
  constructor(
    private http: HttpClient
  ) { }

  public getById(id: string): Observable<MascotaModel> {
    return this.http.get<MascotaModel>(`${this.url}/${id}`);
  }

  getAll(): Observable<MascotaModel[]> {
    return this.http.get<MascotaModel[]>(this.url);
  }

  public createOne(mascota: MascotaModel): Observable<MascotaModel> {
    return this.http.post<MascotaModel>(
      this.url,
      mascota
    );
  }

  public deleteById(id: number): Observable<null> {
    return this.http.delete<null>(`${this.url}/${id}`);
  }
}
