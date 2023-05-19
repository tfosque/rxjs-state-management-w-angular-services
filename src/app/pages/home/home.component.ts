import { Component, OnInit } from '@angular/core';
import { VariationColors, VariationMfg } from '../../services/variations';
// import { FormControl } from '@angular/forms';
import * as _ from 'lodash';

/* TODO */
// How do we get default or current sku selections
// 

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
} )
export class HomeComponent implements OnInit {
  mfgs: any = [];
  colors: any = [];
  /*  */

  objectMFG: any = VariationMfg;
  objectColor: any = VariationColors;

  /*  */
  mfgSelLabel: any = '';
  colSelLabel: any = '';
  /*  */

  mfgSelection = '';
  colorSelection = '';
  mfgSelectionSkus = [];
  colorSelectionSkus = [];

  /*  */
  matches = [];
  /*  */

  selectedMFG: any = '';
  skuDisplayColor: any = '';
  /*  */
  selectedSkuColor = '';
  selectedSkuMfg = '';

  constructor() { }

  ngOnInit(): void {
    /* PRODUCT 40775 tested */
    this.objectMFG = VariationMfg; // { ABC: ["265348", "22718", "282705"] }
    this.objectColor = VariationColors; // { Adobe(301): ["22720"] }
    const objectMFG = this.objectMFG;
    const objectColor = this.objectColor;
    console.log( { objectMFG } ); console.log( { objectColor } );

    this.populateDefaultVariations();
    // this.handleColorChange();
  }

  fetchProductBySku( sku: any ) {
    // retrieve variations and variation types from a sku
  }
  getAllMfg() {
    return Object.entries( this.objectMFG );
  }
  getAllColors() {
  }

  sortList( objectArray: any ) {
    const jsSort = objectArray.sort( function ( a: any, b: any ) {
      var textA = a[0].toUpperCase();
      var textB = b[0].toUpperCase();
      return ( textA < textB ) ? -1 : ( textA > textB ) ? 1 : 0;
    } );
    // console.log( { jsSort } );
    return jsSort;
  }

  onSelectMfg() { }
  onSelectColor() { }

  onSelectUpdateThumb() {
  }

  /*  _zip, unzip, pullAt, without, xor, compact _.includes */
  populateDefaultVariations() {
    const objectMFG = this.objectMFG;
    const objectColor = this.objectColor;

    const MFGS = Object.entries( objectMFG );
    const COLORS = Object.entries( objectColor );

    this.mfgs = _.orderBy( MFGS );
    this.colors = this.sortList( COLORS );
  }

  handleColor( color: string = 'Ash(502)' ) {
    console.log( { color } )
    // default Sku is this important when no selection has been made?

    const objectMFG = this.objectMFG;
    const objectColor = this.objectColor;

    // what does list1 and 2 look like side by side
    const list1 = Object.entries( objectMFG );
    const list2 = Object.entries( objectColor );
    console.log( { list1 } );
    console.log( { list2 } );
    //
    const includes = list1.filter( f => {
      console.log( 'includes:', _.includes( list2, f ) );
      return _.includes( list2, f );
    } )
    console.log( { includes } );

    // loop over each mfg
    const entries = this.getAllMfg()
      .map( ( itemMfg: any ) => {
        // console.log( 'm1', m[1], 'objColor:', cp )// objectColor['']

        /* TODO dynamically change color */
        const itemColor: any = objectColor[color];
        // console.log( 'm[0]', m[0] )

        /*  if ( _.includes( itemMfg[1], itemColor[0] ) ) {
             STOP if no matches ???
         } */

        return _.includes( itemMfg[1], itemColor[0] ) ? itemMfg : null;
      } )
    /* End of entries  */

    const matches = _.compact( entries );
    console.log( { matches } );
    /*  */

    /* SORT MFG */
    this.mfgs = _.orderBy( Object.entries( objectMFG ) );
    console.log( 'this.mfgs:', this.mfgs );

    /* SORT COLORS */
    this.colors = this.sortList( Object.entries( objectColor ) )

    /*  */
  }

  /* HANDLE COLOR CHANGE */
  handleColorChange( selColor: any = { 'Acadia(750)': ['555291'] } ) {
    console.log( { selColor } )
    // TODO default Sku is this important when no selection has been made?

    const objectMFG = this.objectMFG;
    const objectColor = this.objectColor;

    // what does list1 and 2 look like side by side
    const list1Entries = Object.entries( objectMFG );
    const list2Entries = Object.entries( objectColor );
    console.log( { list1Entries } ); console.log( { list2Entries } );

    /* SORT MFG */
    this.mfgs = _.orderBy( Object.entries( objectMFG ) );

    /* SORT COLORS */
    this.colors = this.sortList( Object.entries( objectColor ) );
    /*  */
  }
  getMatches() {
    const matches: any = _.intersection( this.selectedMFG, this.skuDisplayColor );
    this.matches = matches;
    console.log( { matches } );
    console.log( 'skuDisplayMFG', this.selectedMFG );
    console.log( 'skuDisplayColor', this.skuDisplayColor );

    return matches;
  }

  setSkuDisplayMFG( ev: any ) {
    // console.log( { ev } )
    this.selectedMFG = ev[1];
    this.mfgSelLabel = ev[0]
    this.mfgSelection = ev;
    this.mfgSelectionSkus = [];

    this.getMatches();
  }

  setSkuDisplayColor( ev: any ) {
    // console.log( ev )
    this.skuDisplayColor = ev[1];
    this.colSelLabel = ev[0]
    this.colorSelection = ev;
    this.colorSelectionSkus = []

    this.getMatches();
  }

  highlightMatch( item: any ) {
    return _.includes( this.matches, item );
  }

  disableDropdownItem( item: any ) {
    console.log( { item } )
    // item[0]
    return item;
  }


}
