import {Component, OnInit} from '@angular/core';
import {SolicitudModel} from "../../../../core/models/solicitud.model";
import {map, Observable, switchMap, tap} from "rxjs";
import {SolicitudService} from "../../../../core/services/solicitud.service";
import {ActivatedRoute} from "@angular/router";
import {AdoptService} from "../../../../core/services/adopt.service";
import {MascotaModel} from "../../../../core/models/mascota.model";
import {MascotaService} from "../../../../core/services/mascota.service";
import {Profile} from "../../../../core/models/profile.model";
import {PerfilAdoptanteModel} from "../../../../core/models/perfil-adoptante.model";

@Component({
  selector: 'app-solicitud-detail',
  templateUrl: './solicitud-detail.component.html',
  styleUrls: ['./solicitud-detail.component.css']
})
export class SolicitudDetailComponent implements OnInit {

  solicitud?: SolicitudModel;
  $data: Observable<
    {
      solicitud: SolicitudModel,
      perfil: PerfilAdoptanteModel
    } | null
  >

  constructor(
    private solicitudService: SolicitudService,
    private adoptanteService: AdoptService,
    private mascotaService: MascotaService,
    private route: ActivatedRoute
  )
  {
    let id = route.snapshot.paramMap.get('id');
    // @ts-ignore
    const $solicitud = solicitudService.getById(id).pipe(
      tap(solicitud => this.solicitud = solicitud),
      switchMap(
        solicitud => {
          return this.adoptanteService.getPerfilByAdoptanteId(solicitud.adoptante.id)
            .pipe(
              map(perfil => {
                return {
                  solicitud: solicitud,
                  perfil: perfil
                }
              })
            )
        }
      )
    );
    this.$data = $solicitud;
  }

  ngOnInit(): void {
  }


}
