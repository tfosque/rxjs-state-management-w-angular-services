import { Injectable } from '@angular/core';
import { Large_Template_9_15_23 as templateData } from './currentSkuData';
import { Templates } from '../../pages/template-details/templates-data';

import * as _ from 'lodash';

@Injectable( {
  providedIn: 'root'
} )
export class VariationService {
  variationDetails: any = {}
  sampleTemplates: any = [];
  account: any = {};

  constructor() {
    this.sampleTemplates = Templates;
  }

  setVariationDetails( element: any ) {
    this.variationDetails = element;
  }
  setAccount( accountName: string, accountId: string ) {
    this.account = { accountName, accountId };
  }

  getItemVariations( data: any, varType: any ) {
    const list = data[varType];
    const KEYS = Object.keys( list );
    // this.buildDropDownsQuick( data, varType )
    return KEYS.sort();
  }
  buildDropDownsQuick( data: any, varType: any ): any {
    // console.log( 'buildDropDownsQuick', { data }, { varType } );
    const list = data[varType];
    const KEYS = Object.keys( list );

    const dataArray = Object.entries( data ).map( ( k: any ) => {
      console.log( { k } )
      return Object.entries( k[1] ).map( ( i: any ) => {
        console.log( { i } )
        return { [k[0]]: i[0], sku: i[1][0] }
      } )
    } )
    //'
    if ( varType === 'MFG' ) {
      // console.log( _.sortBy( dataArray[1], 'MFG' ) )
      return _.sortBy( dataArray[1], 'MFG' )
    }
    if ( varType === 'color' ) {
      // console.log( _.sortBy( dataArray[0], 'color' ) )
      return _.sortBy( dataArray[0], 'color' );
    }
    // return KEYS.sort();
    return []
  }

  buildDropDownsQuick2( data: any, varType: any ): any {
    // console.log( { data } );

    const dataArray = Object.entries( data.variations ).map( ( k: any ) => {
      return Object.entries( k[1] ).map( ( i: any ) => {
        return { [k[0]]: i[0], sku: i[1][0] }
      } )
    } )

    // find index
    const myIndex = dataArray.map( ( m: any, i: number ) => m[0] );
    const pos = myIndex.findIndex( f => f[varType] );
    // console.log( { myIndex } );
    // console.log( { pos } )
    // console.log( _.sortBy( dataArray[pos], varType ) );
    if ( varType === 'MFG' ) {
      return _.sortBy( dataArray[pos], 'MFG' )
    }
    if ( varType === 'length' ) {
      return _.sortBy( dataArray[pos], 'length' )
    }
    if ( varType === 'color' ) {
      return _.sortBy( dataArray[pos], 'color' );
    }
    if ( varType === 'packaging' ) {
      return _.sortBy( dataArray[pos], 'packaging' );
    }
    if ( varType === 'size' ) {
      return _.sortBy( dataArray[pos], 'size' );
    }
    if ( varType === 'width' ) {
      return _.sortBy( dataArray[pos], 'width' );
    }
    if ( varType === 'thickness' ) {
      return _.sortBy( dataArray[pos], 'thickness' );
    }
    if ( varType === 'diameter' ) {
      return _.sortBy( dataArray[pos], 'diameter' );
    }
    if ( varType === 'dimensions' ) {
      return _.sortBy( dataArray[pos], 'dimensions' );
    }
    return []
  }
  updateDropdownAfterSelection() {

  }
}
