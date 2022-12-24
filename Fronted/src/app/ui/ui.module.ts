import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyButtonComponent} from "./components/my-button/my-button.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    MyButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyButtonComponent,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule
  ]
})
export class UiModule { }
