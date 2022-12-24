import { Component, OnInit } from '@angular/core';
import {MascotaService} from "../../../../core/services/mascota.service";
import {MascotaModel} from "../../../../core/models/mascota.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registrar-mascota',
  templateUrl: './registrar-mascota.component.html',
  styleUrls: ['./registrar-mascota.component.css']
})
export class RegistrarMascotaComponent implements OnInit {

  constructor(
    private mascotaService: MascotaService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onNewMascotaForm(mascota: MascotaModel) {
    this.mascotaService.createOne(mascota).subscribe(
      r => {
        let snackbar = this.snackBar.open('Registro Exitoso', 'Undo', {
          duration: 2000
        });
        this.router.navigate(['/admin/mascotas']);
      }
    )
  }

}
