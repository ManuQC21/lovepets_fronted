import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./pages/profile/profile.component";
import {ShelterComponent} from "./pages/shelter/shelter.component";
import {PetComponent} from "./pages/pet/pet.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shelter'
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'shelter',
    component: ShelterComponent
  },
  {
    path: 'pet/:id',
    component: PetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdopterRoutingModule { }
