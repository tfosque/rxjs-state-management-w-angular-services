import { StateService } from './state.service';
import { CartSummary } from '../models/cart';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { CartItem } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private selectedCartItems = new BehaviorSubject<CartItem>({
    name: '',
    desc: '',
    productId: '',
    price: 0,
    qty: 0,
  });
  public selectedCartItems$ = this.selectedCartItems.asObservable();

  private cartItems = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItems.asObservable();

  private summary = new BehaviorSubject<CartSummary>({
    subtotal: 0,
    tax: 0,
    otherCharges: '',
    total: 0,
  });
  public summary$ = this.summary.asObservable();
  constructor(private readonly state: StateService) {}

  public getCartItems(): void {
    /* API Call */
    const httpResponse = new BehaviorSubject<CartItem[]>([
      { name: '', desc: '', productId: '', price: 0, qty: 0 },
    ]);
    httpResponse.pipe(shareReplay(1)).subscribe((items) => {
      this.cartItems.next(items);
      const nextCart = {
        cartItems: this.cartItems.value,
        summary: this.summary.value,
        selectedItems: this.selectedCartItems.value,
      };
      // async api Crud operation
      this.updateState('cart', nextCart);
      this.updateState('orders', nextCart);
      this.updateState('eagleView', nextCart);
    });
    // console.log('this:cartItems:', this.cartItems.value);
  }

  public addItemToCart(item: CartItem): void {
    const mergedItems = [...this.cartItems.value, item];
    this.cartItems.next(mergedItems);
  }
  public addMultipeItemsToCart(items: CartItem[]): void {}

  public removeItemFromCart(item: CartItem): void {}
  public removeMultipleItemsFromCart(items: CartItem[]): void {}

  public addSelectedItem(item: CartItem): void {}
  public addMultipleSelectedItems(items: CartItem[]): void {}

  /* STATE */
  private updateState(category: string, state: any) {
    this.state.setState(category, state);
  }
}
