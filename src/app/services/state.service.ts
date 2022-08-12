import { State } from './../models/state';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private currState = new BehaviorSubject<State | null | any>(null);
  public currState$ = this.currState.asObservable();
  constructor() {
    this.initState();
  }

  /* TYPE handle type when ambiguous */

  private initState(): State {
    // const s = this.currState.value;
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
  public setState(category: string, newState: any): void {
    if (!category || !newState) return;

    const currState = this.currState.value;
    console.log({ currState });

    /* APPEND State ie, cart, orders, etc... */
    console.log(
      'currState.state[category]',
      { category },
      currState.state[category]
    );
    /* Update category value */
    currState.state[category] = newState;
    const nextState = currState;

    this.currState.next(nextState);
    console.log('currState.value', this.currState.value);
  }
}
