import { MenuModule } from './menu/menu.module';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';

/* MATERIAL MODULES */
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
@NgModule( {
  declarations: [AppComponent, HomeComponent, ErrorComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    MatSliderModule,
    MatSelectModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
} )
export class AppModule { }
