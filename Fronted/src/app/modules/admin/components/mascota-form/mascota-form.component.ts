import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Profile} from "../../../../core/models/profile.model";
import {MascotaModel} from "../../../../core/models/mascota.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-mascota-form',
  templateUrl: './mascota-form.component.html',
  styleUrls: ['./mascota-form.component.css']
})
export class MascotaFormComponent implements OnInit {

  private _mascota!: MascotaModel;
  @Output() onSubmit: EventEmitter<MascotaModel> = new EventEmitter<MascotaModel>()
  formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    this.formGroup = this.fb.group(
      {
        'nombres': [
          null, [Validators.required]
        ],
        'raza': [
          null, [Validators.required]
        ],
        'tamanio': [
          null, [Validators.required]
        ],
        'adoptada': [
          false, [Validators.required]
        ]
      }
    );
  }

  onSubmitForm(value: Profile) {
    let profile = this.formGroup.value;
    this.onSubmit.emit(profile);
  }

}
