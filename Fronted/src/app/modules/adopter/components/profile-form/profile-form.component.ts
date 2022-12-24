import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Profile} from "../../../../core/models/profile.model";
import {ProfileComponent} from "../../pages/profile/profile.component";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  private _profile!: Profile;
  @Input('profile')
  set profile(profile: Profile) {
    this._profile = profile;
    this.formGroup.patchValue(
      {
        name: profile.name,
        surname: profile.surname,
        age: profile.age,
        dni: profile.dni,
        phone: profile.phone,
        address: profile.address,
        email: profile.email
      }
    )
  }

  @Output() onSubmit: EventEmitter<Profile> = new EventEmitter<Profile>()
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    this.formGroup = this.formBuilder.group(
      {
        'name': [
          null, [Validators.required]
        ],
        'surname': [
          null, [Validators.required]
        ],
        'age': [
          null, [Validators.required]
        ],
        'dni': [
          null, [Validators.required]
        ],
        'phone': [
          null, [Validators.required]
        ],
        'address': [
          null, [Validators.required]
        ],
        'email': [
          null, [Validators.required, Validators.pattern(emailregex)]
        ]
      }
    );
  }

  onSubmitForm(value: Profile) {
    let profile = this.formGroup.value;
    this.onSubmit.emit(profile);
  }
}
