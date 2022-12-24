import { Component, OnInit } from '@angular/core';
import {GeneralDataService, Statistic} from "../../services/general-data.service";
import {Observable} from "rxjs";
import {User} from "../../../../core/models/user.model";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  pawsData$: Observable<Statistic[] | null>;

  constructor(
    private generalDataService: GeneralDataService
  ) {
    this.pawsData$ = generalDataService.getGeneralData();
  }

  ngOnInit(): void {
  }

}
