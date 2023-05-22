import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component( {
  selector: 'app-add-product-modal-pilot',
  templateUrl: './add-product-modal-pilot.component.html',
  styleUrls: ['./add-product-modal-pilot.component.scss']
} )
export class AddProductModalPilotComponent implements OnInit {
  products = new BehaviorSubject<any>( [] );
  baseImgUrl = 'https://beaconproplus.com';
  // https://static.becn.com/insecure/plain/images/large/C-734607_default_thumb.jpg
  // https://beaconproplus.com/images/large/586865_default_thumb.jpg

  selectedModalProducts = new BehaviorSubject<any>( [] );

  constructor(
    private readonly productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.products.next( this.productsService.getSampleProducts() );
    console.log( 'this.products', this.products.value );
    console.log( 'products:', this.productsService.getSampleProducts() );
  }

  addSelectedProduct( product: any ) {
    const currSelProducts = this.selectedModalProducts.value;

    // this.selectedModalProducts.next(product)
    const updateSelProducts = { ...currSelProducts, product };
    console.log( { updateSelProducts } );
  }


}
