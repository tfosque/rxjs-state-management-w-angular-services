import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
} )
export class CartComponent implements OnInit {

  constructor(
    private readonly cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getCartItems();
  }

}
