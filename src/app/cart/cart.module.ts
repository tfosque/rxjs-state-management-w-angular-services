import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineItemComponent } from './line-item/line-item.component';
import { QtyInputComponent } from './qty-input/qty-input.component';



@NgModule({
  declarations: [
    LineItemComponent,
    QtyInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
