import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule( {
  declarations: [
    MenuComponent,
  ],
  exports: [MenuComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule
  ]
} )
export class MenuModule { }
