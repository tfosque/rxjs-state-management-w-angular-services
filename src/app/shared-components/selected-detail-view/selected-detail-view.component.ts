import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import * as _ from 'lodash';

@Component( {
  selector: 'app-selected-detail-view',
  templateUrl: './selected-detail-view.component.html',
  styleUrls: ['./selected-detail-view.component.scss']
} )
export class SelectedDetailViewComponent implements OnInit {
  // dynamically add table headers
  displayedColumns = new BehaviorSubject<any>( [] );
  columnsToDisplay: any[] = [this.displayedColumns].slice();
  expandedElement: any | null;
  @Input() panelOpenState: any = false;
  //   @Input() scroll: any = false;
  @Input() product: any = {};
  detailsInfo = new Subject();
  headers = new BehaviorSubject<any>( [] );
  variations: any = []
  baseImgUrl = 'https://beaconproplus.com'; // /images/large/C-734607_default_small.jpg'
  baseSwatchUrl = 'https://static.becn.com/insecure/plain' // /images/large/366161_default_thumb.jpg'
  data = [
    { sku: '374189', color: 'Golden Cedar', size: '--' },
    { sku: '366155', color: 'Amber', size: '--' },
    { sku: '366157', color: 'Brownwood', size: '--' },
    { sku: '366159', color: 'Desert Tan', size: '--' },
    { sku: '292544', color: 'Sierra Grey', size: '--' }
  ];

  constructor(
    private readonly productService: ProductsService
  ) {
    // variations
    this.variations = this.productService.Product336994Data.variations;
  }

  ngOnInit(): void {
    console.log( 'product:', this.product );
    this.panelOpenState.subscribe( ( s: any ) => {
      console.log( { s } );
    } )

    // NOTE observable can be subscribe to as it is inherited 
    // map over to get table headers
    const data = this.data;

    const headers = data.map( ( m: any ) => {
      // console.log( { m } );

      const list = Object.entries( m ).map( ( entry: any ) => {
        // console.log( { entry } );
        return entry[0];
      } );
      // console.log( { list } );
      return list;
    } );
    //console.log( 'headers', headers[0] );
    this.headers.next( headers[0] );
    this.displayedColumns.next( this.headers.value );
  }
  clearProductDisplay() {
    this.product = null;
    this.panelOpenState = false;
  }

}
