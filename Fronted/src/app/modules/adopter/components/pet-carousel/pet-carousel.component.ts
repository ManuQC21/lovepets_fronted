import {Component, Input, OnInit} from '@angular/core';
import {Pet} from "../../../../core/models/pet.model";

@Component({
  selector: 'app-pet-carousel',
  templateUrl: './pet-carousel.component.html',
  styleUrls: ['./pet-carousel.component.css']
})
export class PetCarouselComponent implements OnInit {

  @Input() pets : Pet[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
