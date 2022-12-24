import {Component, Input, OnInit} from '@angular/core';
import {Pet} from "../../../../core/models/pet.model";

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {

  @Input() pet!: Pet;

  constructor() { }

  ngOnInit(): void {
  }

}
