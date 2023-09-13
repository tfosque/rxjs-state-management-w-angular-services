import { Injectable } from '@angular/core';
import {
  SampleProducts_Pg1,
  SampleProducts_Pg2,
  SampleProducts_Pg3,
  Item446323,
  Product336994,
  ItemDetailsResponse_438733
} from '../pages/home/currentSkuData';
import { BehaviorSubject } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class ProductsService {
  selectedItems = new BehaviorSubject<any>( [] );
  public Item4463Data = Item446323;
  public Product336994Data = Product336994;
  public ItemDetailsResponse_p438733 = ItemDetailsResponse_438733;

  constructor() {
    console.log( ItemDetailsResponse_438733 );
  }

  public getSampleProducts() {
    const data: any = SampleProducts_Pg1;
    console.log( { data } );
    return data;
  }

  onAddSelectedItem( item: any ) {
    this.selectedItems.next( { ...this.selectedItems.value, item } );
  }

}
