import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import * as _ from 'lodash';

@Component( {
  selector: 'app-add-product-modal-pilot',
  templateUrl: './add-product-modal-pilot.component.html',
  styleUrls: ['./add-product-modal-pilot.component.scss']
} )
export class AddProductModalPilotComponent implements OnInit {
  @ViewChild( 'scrollContainer', { static: true } ) scrollContainer: ElementRef | undefined;
  products = new BehaviorSubject<any>( [] );
  baseImgUrl = 'https://beaconproplus.com';
  selectedModalProducts = new BehaviorSubject<any>( [] );
  currSelection = new Subject();
  scroll = new BehaviorSubject<boolean>( false );
  panelOpenState = new BehaviorSubject<boolean>( false );

  constructor(
    private readonly productsService: ProductsService
  ) {
    this.panelOpenState.next( false );
  }

  ngOnInit(): void {
    this.products.next( this.productsService.getSampleProducts() );
    console.log( 'this.products', this.products.value );
    console.log( 'products:', this.productsService.getSampleProducts() );
  }

  getLastSelectedProduct() {
    return _.last( this.selectedModalProducts.value ) || []
  }

  selectProduct( product?: any ) {
    this.currSelection.next( product );
    // console.log( { product } );
    // const product336994 = this.productsService.Product336994Data;
    // console.log( { product336994 } );

    const currSelProducts = this.selectedModalProducts.value;
    const updateSelProducts = [...currSelProducts, product];

    this.selectedModalProducts.next( _.uniqBy( updateSelProducts, item => item.productId ) );

    this.scrollContainer?.nativeElement.scrollTo( { top: 0, behavior: 'smooth' } );
    this.panelOpenState.next( true );
    return product || {}
  }

  getProduct336994() {
    const product336994 = this.productsService.Product336994Data;
    console.log( { product336994 } );
  }

  itemDetails_446323() {
    this.productsService.Item4463Data;
  }

}
