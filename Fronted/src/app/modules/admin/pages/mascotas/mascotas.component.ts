import { Component, OnInit } from '@angular/core';
import {MascotaModel} from "../../../../core/models/mascota.model";
import {MascotaService} from "../../../../core/services/mascota.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {
  dataSource: MascotaModel[] = [];
  displayedColumns: string[] =
    ['nombres', 'adoptada', 'raza', 'tamanio', 'actions'];

  constructor(
    private mascotaService: MascotaService,
    private snackBar: MatSnackBar,
    // private dialog: MatDialog
  ) {
    this.fetchData();
  }

  ngOnInit(): void {
  }

  fetchData() {
    this.mascotaService.getAll()
      .subscribe(data => {
        this.dataSource = data;
      })
  }

  deletePet(id: number) {
    if (confirm('Seguro?')) {
      this.mascotaService.deleteById(id).subscribe(
        r => {
          let snackbar = this.snackBar.open('Registro Exitoso', 'Undo', {
            duration: 2000
          });
          this.fetchData();
        }
      )
    }
  }

}
