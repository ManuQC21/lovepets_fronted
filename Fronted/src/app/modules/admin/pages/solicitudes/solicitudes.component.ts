import { Component, OnInit } from '@angular/core';
import {SolicitudService} from "../../../../core/services/solicitud.service";
import {SolicitudModel} from "../../../../core/models/solicitud.model";

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  dataSource: SolicitudModel[] = [];
  displayedColumns: string[] = ['mascota', 'aceptada', 'enEspera', 'fechaSolicitud', 'mensaje', 'actions'];
  constructor(
    private solicitudService: SolicitudService
  ) {
    this.fetchData();
  }

  ngOnInit(): void {
  }

  fetchData() {
    this.solicitudService.getAll().subscribe(
      data => {
        this.dataSource = data;
        console.info(data)
      }
    )
  }

}
