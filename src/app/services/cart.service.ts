import { CartSummary } from './../models/cart-item';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item';

@Injectable( {
  providedIn: 'root'
} )
export class CartService {
  private selectedCartItems = new BehaviorSubject<CartItem>( {
    name: '',
    desc: '',
    productId: '',
    price: 0,
    qty: 0
  } );
  public selectedCartItems$ = this.selectedCartItems.asObservable();

  private cartItems = new BehaviorSubject<CartItem[]>( [] );
  public cartItems$ = this.cartItems.asObservable();

  private summary = new BehaviorSubject<CartSummary>( {
    subtotal: 0,
    tax: 0,
    otherCharges: '',
    total: 0
  } )
  constructor() { }

  public getCartItems(): void {

  }

  public addItemToCart(): void {

  }

  public removeItemFromCart(): void {

  }

  public addMultipeItemsToCart(): void {

  }
}
