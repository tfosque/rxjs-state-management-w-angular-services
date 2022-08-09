import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineItemComponent } from './line-item/line-item.component';
import { QtyInputComponent } from './qty-input/qty-input.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    LineItemComponent,
    QtyInputComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
