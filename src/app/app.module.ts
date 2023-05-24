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
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AddProductModalPilotComponent } from './shared-components/add-product-modal-pilot/add-product-modal-pilot.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';

import { ImgErrDirective } from './directives/img-err.directive';
import { SelectedDetailViewComponent } from './shared-components/selected-detail-view/selected-detail-view.component';
@NgModule( {
  declarations: [AppComponent, HomeComponent, ErrorComponent, LoginComponent, AddProductModalPilotComponent, ImgErrDirective, SelectedDetailViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    MatSliderModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatExpansionModule,
    MatBadgeModule,
    MatListModule,
    MatChipsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
} )
export class AppModule { }
