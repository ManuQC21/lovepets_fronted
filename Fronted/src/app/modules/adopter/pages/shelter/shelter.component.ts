import { Component, OnInit } from '@angular/core';
import {Pet} from "../../../../core/models/pet.model";
import {ShelterService} from "../../../../core/services/shelter.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.css']
})
export class ShelterComponent implements OnInit {

  pets$: Observable<Pet[] | null>;


  constructor(
    private shelterService: ShelterService
  ) {
    this.pets$ = shelterService.getShelterPets();
  }

  ngOnInit(): void {
  }

}
