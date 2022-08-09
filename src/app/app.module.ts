import { MenuModule } from './menu/menu.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule( {
  declarations: [AppComponent, HomeComponent, ErrorComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MenuModule],
  providers: [],
  bootstrap: [AppComponent],
} )
export class AppModule { }
