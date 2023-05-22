import { Injectable } from '@angular/core';
import {
  SampleProducts_Pg1,
  SampleProducts_Pg2,
  SampleProducts_Pg3
} from '../pages/home/currentSkuData';

@Injectable( {
  providedIn: 'root'
} )
export class ProductsService {

  constructor() { }

  public getSampleProducts() {
    const data: any = SampleProducts_Pg1;
    return data;
  }

}
