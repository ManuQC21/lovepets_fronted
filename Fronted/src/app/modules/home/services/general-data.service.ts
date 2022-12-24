import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

export interface Statistic {
  description: string,
  count: number
}

@Injectable({
  providedIn: 'root'
})
export class GeneralDataService {

  mockedData : Statistic[] = [
    {
      description: 'Albergados',
      count: 100
    },
    {
      description: 'Adoptados',
      count: 24
    },
    {
      description: 'Voluntarios',
      count: 10
    }
  ]

  constructor() { }

  public getGeneralData(): Observable<Statistic[]> {
    return new Observable<Statistic[]>((subscriber) => {
      setTimeout(() => {
        subscriber.next(this.mockedData);
        subscriber.complete();
      }, 1000);
    })
  }
}
