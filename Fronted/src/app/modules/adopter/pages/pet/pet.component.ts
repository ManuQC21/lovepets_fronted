import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Pet} from "../../../../core/models/pet.model";
import {ShelterService} from "../../../../core/services/shelter.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  pet$: Observable<Pet | null>;
  pets$: Observable<Pet[] | null>;

  constructor(
    private shelterService: ShelterService,
    private route: ActivatedRoute
  ) {
    let id = route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.pet$=shelterService.getPetInfo(id);
    this.pets$ = shelterService.getShelterPets();
  }

  ngOnInit(): void {
  }

}
