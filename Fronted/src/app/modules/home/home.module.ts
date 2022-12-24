import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SampleComponent } from './pages/sample/sample.component';
import {UiModule} from "../../ui/ui.module";
import { PawCounterComponent } from './components/paw-counter/paw-counter.component';


@NgModule({
  declarations: [
    SampleComponent,
    PawCounterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UiModule
  ]
})
export class HomeModule { }
