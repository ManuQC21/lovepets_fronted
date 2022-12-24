import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { SolicitudDetailComponent } from './pages/solicitud-detail/solicitud-detail.component';
import { VoluntariadosComponent } from './pages/voluntariados/voluntariados.component';
import { RegistrarVoluntariadoComponent } from './pages/registrar-voluntariado/registrar-voluntariado.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import {UiModule} from "../../ui/ui.module";
import { RegistrarMascotaComponent } from './pages/registrar-mascota/registrar-mascota.component';
import { MascotaFormComponent } from './components/mascota-form/mascota-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SolicitudesComponent,
    SolicitudDetailComponent,
    VoluntariadosComponent,
    RegistrarVoluntariadoComponent,
    MascotasComponent,
    RegistrarMascotaComponent,
    MascotaFormComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        UiModule,
        ReactiveFormsModule
    ]
})
export class AdminModule { }
