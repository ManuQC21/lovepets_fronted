import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './core/components/navbar/navbar.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./core/services/auth.service";
import {LayoutComponent} from './core/layout/layout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { FooterComponent } from './core/components/footer/footer.component';
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    HttpClient,
    AuthService,
    MatSnackBar,
    MatDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
