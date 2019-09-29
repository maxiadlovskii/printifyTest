import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../components/app/app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from "./ui.module";
import { PageModule } from "./page.module"
import { ContainerModule } from "./container.module"
@NgModule({
  imports: [
    UiModule,
    PageModule,
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    ContainerModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/