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
    const objectMFG = VariationMfg; // { ABC: ["265348", "22718", "282705"] }
    const objectColor = VariationColors; // { Adobe(301): ["22720"] }
    console.log( { objectMFG } ); console.log( { objectColor } );

    /*  _zip, unzip, pullAt, without, xor, compact _.includes */
    /*  const match = _.includes( ['40779', '568393'], '568393' );
     console.log( { match } ); */

    // console.log( 'objectColor[Adobe(301)]:', objectColor['Adobe(301)'].shift() );


    const entries = Object.entries( objectMFG ).map( ( m: any ) => {
      // console.log( 'm1', m[1], 'objColor:', cp )// objectColor['']

      const cp: any = objectColor['Acadia(750)'];
      // console.log( 'm[0]', m[0] )

      if ( _.includes( m[1], cp[0] ) ) {
        // console.log( { cp }, cp[0], m[0] );
        // console.log( 'objColor(m[0])' );
      }
      return _.includes( m[1], cp[0] ) ? m : null;
    } )
    console.log( { entries } );

    const compact = _.compact( entries );
    console.log( { compact } );
    this.mfgs = compact;

    console.log( 'this.options:', this.mfgs );

    /*  */
    this.colors = _.sortBy( Object.entries( objectColor ), [0] );
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

  checkMatch( item: any ) {
    return _.includes( this.matches, item );
  }
  getMatches() {
    const matches: any = _.intersection( this.skuDisplay, this.skuDisplayColor );
    this.matches = matches;
    console.log( { matches } )
    return matches;
  }

}
