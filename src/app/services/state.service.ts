import { State } from './../models/state';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private currState = new BehaviorSubject<State | null>(null);
  public currState$ = this.currState.asObservable();
  constructor() {
    this.initState();
  }

  /* TYPE handle type when ambiguous */

  private initState(): State {
    const s = this.currState.value;
    const init: State = {
      state: {
        userInfo: {
          accounts: [],
          accountBranch: {},
          cartLineItems: 0,
          contactAddress: '',
          contactPhoneNumber: 0,
          declineNotificationEmail: false,
          defaultOrganization: 'tim.fosque',
          defaultOrganizationId: '12345',
          lastName: 'Fosque',
          firstName: 'Tim',
          lastSelectedAccount: {},
          email: 'tim.fosque@becn.com',
          registrationDate: '',
        },
        cart: [],
        orders: [],
        templates: [],
        addressBook: [],
        deliveryTrackingSettings: [],
        deviceTokens: ['abcd1234'],
        notificationSettings: {},
        eagleView: [],
        quotes: [],
        rebates: [],
        menu: [],
      },
    };
    this.currState.next(init);
    return this.currState.value ? this.currState.value : {};
  }
  public setState(name: string, newState: any): void {
    const currState = this.currState.value;
    /* FIND cart and append */
    const addState =
      currState?.state && currState?.state.cart
        ? (currState.state.cart = newState)
        : [];
    //  const nextState = [...currState, newState];
    console.log({ addState });
    // this.currState.next( { name, nextState } ); // find name of state (this is the change or appending)
    console.log(this.currState.value);
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
