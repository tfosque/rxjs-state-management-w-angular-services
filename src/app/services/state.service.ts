import { State } from './../models/state';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class StateService {
  private currState = new BehaviorSubject<State[]>( [] );
  public currState$ = this.currState.asObservable();
  constructor() {
    this.initState();
  }

  /* TYPE handle type when ambiguous */

  private initState() {
    const s = this.currState.value;
    const newstate: State = {
      state: {
        userInfo: [],
        cart: [],
        orders: [],
        templates: [],
        addressBook: [],
        deliveryTrackingSettings: [],
        notificationSettings: {},
        eagleView: [],
        quotes: [],
        rebates: [],
        menu: []
      }
    }
    this.currState.next( [newstate] );
  }
  public setState( name: string, newState: any ): void {
    const currS = this.currState.value;
    /* FIND cart and append */
    const findCart = currS.find( f => {
      f.state.cart ? console.log( { f } ) : null;
    } )
    const nextState = [...currS, newState];
    console.log( { nextState } )
    // this.currState.next( { name, nextState } ); // find name of state (this is the change or appending)
    console.log( name, this.currState.value );
  }
}

/* function stest() {
  const stateObj = {
    state: {
      userInfo: [],
      cart: [],
      orders: [],
      templates: [],
      addressBook: [],
      deliveryTrackingSettings: [],
      notificationSettings: {},
      eagleView: [],
      quotes: [],
      rebates: [],
      menu: []
    }
  }
} */