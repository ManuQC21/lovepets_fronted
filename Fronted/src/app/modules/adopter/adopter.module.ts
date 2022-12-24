import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdopterRoutingModule } from './adopter-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {UiModule} from "../../ui/ui.module";
import { ShelterComponent } from './pages/shelter/shelter.component';
import { PetComponent } from './pages/pet/pet.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import {PetCarouselComponent} from "./components/pet-carousel/pet-carousel.component";


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileFormComponent,
    ShelterComponent,
    PetComponent,
    PetCardComponent,
    PetCarouselComponent
  ],
  imports: [
    CommonModule,
    AdopterRoutingModule,
    ReactiveFormsModule,
    UiModule
  ]
})
export class AdopterModule { }
