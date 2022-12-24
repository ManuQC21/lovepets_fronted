import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "../adopter/pages/profile/profile.component";
import {ShelterComponent} from "../adopter/pages/shelter/shelter.component";
import {PetComponent} from "../adopter/pages/pet/pet.component";
import {SolicitudesComponent} from "./pages/solicitudes/solicitudes.component";
import {SolicitudDetailComponent} from "./pages/solicitud-detail/solicitud-detail.component";
import {VoluntariadosComponent} from "./pages/voluntariados/voluntariados.component";
import {MascotasComponent} from "./pages/mascotas/mascotas.component";
import {RegistrarMascotaComponent} from "./pages/registrar-mascota/registrar-mascota.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'solicitudes'
  },
  {
    path: 'solicitudes',
    component: SolicitudesComponent
  },
  {
    path: 'solicitudes/:id',
    component: SolicitudDetailComponent
  },
  {
    path: 'voluntariados',
    component: VoluntariadosComponent
  },
  {
    path: 'mascotas',
    component: MascotasComponent
  },
  {
    path: 'registrar-mascota',
    component: RegistrarMascotaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
