import { Component, OnInit } from '@angular/core';
import { VariationColors, VariationMfg } from '../../services/variations';
import { FormControl } from '@angular/forms';
import * as _ from 'lodash';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
} )
export class HomeComponent implements OnInit {
  mfgs: any = [];
  colors: any = [];
  /*  */

  objectMFG: any = {};
  objectColor: any = {};

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

  skuDisplay: any = '';
  skuDisplayColor: any = '';
  /*  */
  selectedSkuColor = '';
  selectedSkuMfg = '';

  constructor() { }

  ngOnInit(): void {
    this.objectMFG = VariationMfg; // { ABC: ["265348", "22718", "282705"] }
    this.objectColor = VariationColors; // { Adobe(301): ["22720"] }
    const objectMFG = this.objectMFG;
    const objectColor = this.objectColor;
    console.log( { objectMFG } ); console.log( { objectColor } );


    this.findColor();
  }

  findColor() {
    const objectMFG = this.objectMFG;
    const objectColor = this.objectColor;

    /*  _zip, unzip, pullAt, without, xor, compact _.includes */

    // pass in each color
    const entries = Object.entries( objectMFG ).map( ( m: any ) => {
      // console.log( 'm1', m[1], 'objColor:', cp )// objectColor['']

      /* TODO dynamically change color */
      const itemColor: any = objectColor['Adobe(301)'];
      // console.log( 'm[0]', m[0] )

      if ( _.includes( m[1], itemColor[0] ) ) {
        // console.log( { cp }, cp[0], m[0] );
        // console.log( 'objColor(m[0])' );
      }
      return _.includes( m[1], itemColor[0] ) ? m : null;
    } )
    console.log( { entries } );

    const compact = _.compact( entries );
    console.log( { compact } );

    /* disable items */
    /* this.mfgs.map( ( m: any, index: number ) => {
      _.includes( m[1], cp[0] 
    } ) */
    this.mfgs = compact;

    console.log( 'this.options:', this.mfgs );

    /* IMPROVE SORT */
    this.colors = _.orderBy( Object.entries( objectColor ), item => item[0] );
    const sort = this.colors.sort( ( a: any, b: any ) => {
      return b[1] - a[1];
    } );
    this.colors = sort;
    console.log( { sort } )
    console.log( 'objColor:keys', Object.entries( objectColor ) )
  }

  setSkuDisplay( ev: any ) {
    console.log( { ev } )
    this.skuDisplay = ev[1];
    this.mfgSelLabel = ev[0]
    this.mfgSelection = ev;
    this.mfgSelectionSkus = [];

    this.getMatches();
  }

  setSkuDisplayColor( ev: any ) {
    console.log( ev )
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
  getMatches() {
    const matches: any = _.intersection( this.skuDisplay, this.skuDisplayColor );
    this.matches = matches;
    console.log( { matches } )
    return matches;
  }

}
