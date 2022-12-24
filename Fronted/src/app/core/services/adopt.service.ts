import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PerfilAdoptanteModel} from "../models/perfil-adoptante.model";

@Injectable({
  providedIn: 'root'
})
export class AdoptService {

  url: string = environment.baseUrl + '/adoptante'

  constructor(private http: HttpClient) { }

  public getPerfilByAdoptanteId(id: string): Observable<PerfilAdoptanteModel> {
    return this.http.get<PerfilAdoptanteModel>(
      `${this.url}/perfil/${id}`
    );
  }

}
