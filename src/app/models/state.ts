export interface State {
  state?: StateItems;
}

interface StateItems {
  userInfo: {
    accounts: [];
    accountBranch: {};
    cartLineItems: number;
    contactAddress: string;
    contactPhoneNumber: number;
    declineNotificationEmail: boolean;
    defaultOrganization: string;
    defaultOrganizationId: string;
    lastName: string;
    firstName: string;
    lastSelectedAccount: any;
    email: string;
    registrationDate: string;
  };
  cart: [];
  orders: [];
  templates: [];
  addressBook: [];
  deliveryTrackingSettings: [];
  deviceTokens: string[];
  notificationSettings: {};
  eagleView: [];
  quotes: [];
  rebates: [];
  menu: [];
}
