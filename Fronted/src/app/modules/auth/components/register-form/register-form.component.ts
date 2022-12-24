import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginCreds} from "../../../../core/models/login-creds.model";
import {RegisterCreds} from "../../../../core/models/register-creds.model";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  formGroup: FormGroup
  message: string = ''

  @Output() onSubmit: EventEmitter<RegisterCreds> = new EventEmitter<RegisterCreds>();

  constructor(
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      rePassword: [[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    this.formGroup = this.fb.group(
      {
        'username': [
          null, [Validators.required]
        ],
        'password': [
          null, [Validators.required]
        ],
        'rePassword': [
          null, [Validators.required]
        ],
      }
    );
  }

  submitForm() {
    this.formGroup.controls['rePassword'].setValue(this.formGroup.value.password);
    if (this.formGroup.valid) {
      console.log('submit', this.formGroup.value);
      this.onSubmit.emit(this.formGroup.value);
    } else {
      Object.values(this.formGroup.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

}
