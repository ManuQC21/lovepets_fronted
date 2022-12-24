import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {fromEvent, merge} from "rxjs";
import {User} from "../../../../core/models/user.model";
import {LoginCreds} from "../../../../core/models/login-creds.model";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formGroup!: FormGroup;
  message: string = ''


  @Output() onSubmit: EventEmitter<LoginCreds> = new EventEmitter<LoginCreds>();

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.createForm();
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
        'remember': [
          null, []
        ],
      }
    );
  }

  submitForm() {
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
