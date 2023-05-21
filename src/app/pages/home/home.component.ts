import { Component, OnInit } from '@angular/core';
import { VariationColors, VariationMfg } from '../../services/variations';
// import { FormControl } from '@angular/forms';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { currSkuData_407754, Large_Template as templateData } from './currentSkuData';

/* TODO */
// How do we get default or current sku selections
// 

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
} )
export class HomeComponent implements OnInit {
  sampleDataSrc = [
    { select: 1, product: 'Tri-Build 3` Aluminum Hercules Retro Drain', price: 1.0079, qty: 1, del: '' },
    { select: 1, product: 'Tri-Build 3` Aluminum Hercules Retro Drain', price: 1.79, qty: 2, del: '' },
    { select: 1, product: 'Tri-Build 3` Aluminum Hercules Retro Drain', price: 12.0079, qty: 1, del: '' },
    { select: 1, product: 'Tri-Build 3` Aluminum Hercules Retro Drain', price: 231, qty: 3, del: '' },
    { select: 1, product: 'Tri-Build 3` Aluminum Hercules Retro Drain', price: 123.5, qty: 1, del: '' },
  ]
  sampleDataSrc1: any = templateData;
  currentSkuData = currSkuData_407754;
  /*  */
  mfgs: any = [];
  colors: any = [];
  itemCnt = new BehaviorSubject<number>( 0 );
  /*  */

  objectMFG: any = VariationMfg;
  objectColor: any = VariationColors;

  /*  */
  mfgSelLabel: any = '';
  colSelLabel: any = '';
  showTiles = new BehaviorSubject<boolean>( false );
  /*  */

  mfgSelection = '';
  colorSelection = '';
  mfgSelectionSkus = [];
  colorSelectionSkus = [];

  /*  */
  matches = [];
  allMatches: any = [];
  /*  */

  selectedMFG: any = '';
  skuDisplayColor: any = '';
  /*  */
  selectedSkuColor: any = ['Acadia(750)', ['555291']];
  selectedSkuMfg: any = ['A.B. Seam', ['22718']];
  constructor() {
    console.log( 'sampleDataSrc1', this.sampleDataSrc1.templateItems )
  }

  ngOnInit(): void {
    // 
    this.initializeDropdowns();

    /* CUURENT SKU DATA */
    // currSku variations has shorter list of mfgs and colors but name only
    // find these matches in larger list of mfgs and colors

    // setup variables
    const currSkuVariations = this.currentSkuData.variations;
    const currSkuMFG = currSkuVariations['MFG'];
    const currSkuCOLOR = currSkuVariations['color'];
    const baseVariations = { MFG: this.objectMFG, COLOR: this.objectColor };

    /* sort */
    const sortCurrSkuMFG = this.sortList( currSkuMFG );
    const sortCurrSkuCOLOR = this.sortList( currSkuCOLOR );
    const baseVariationsMFG = this.sortList( Object.entries( baseVariations.MFG ) );
    const baseVariationsCOLOR = this.sortList( Object.entries( baseVariations.COLOR ) );


    /* LOG */
    /*  console.group();
     console.log( { currSkuData_407754 } );
     console.log( { currSkuVariations } );
     console.log( { currSkuMFG } );
     console.log( { currSkuCOLOR } );
     console.log( { baseVariations } );
     console.groupEnd(); */
    /*  */
    /*  console.group();
     console.log( { sortCurrSkuMFG } );
     console.log( { sortCurrSkuCOLOR } );
     console.log( { baseVariationsMFG } );
     console.log( { baseVariationsCOLOR } );
     console.groupEnd(); */
    /*  */

    // first return the matching skus from base MFG(808) and currSkuMFG(39)
    const results = sortCurrSkuMFG
      .map( ( currSku: any, index: number ) => {
        // console.log( 'baseVariations[MFG][entries]:', baseVariations['MFG'].hasOwnProperty( currSku ) ? baseVariations['MFG'][currSku] : null )
        return baseVariations['MFG'].hasOwnProperty( currSku ) ? { name: currSku, skus: baseVariations['MFG'][currSku], active: true } : null
      } );
    console.log( { results } );
    /* END CURR SKU DATA */

    /* PRODUCT 40775 tested */
    /*  this.objectMFG = VariationMfg; // { ABC: ["265348", "22718", "282705"] }
     this.objectColor = VariationColors; // { Adobe(301): ["22720"] }
     const objectMFG = this.objectMFG;
     const objectColor = this.objectColor;
     console.log( { objectMFG } ); console.log( { objectColor } ); */
  }

  /* Custom Methods */
  initializeDropdowns() {
    this.populateDefaultVariations();

    const defaultSelections = ( { mfg: this.selectedSkuMfg, colors: this.selectedSkuColor } );

    this.setSkuDisplayColor( defaultSelections.colors );
    this.handleColorChange( defaultSelections.colors );

    /* Display results  */
    this.setSkuDisplayMFG( defaultSelections.mfg );
  }
  getAllMfg() {
    return Object.entries( this.objectMFG );
  }

  getItemCnt() {
    this.itemCnt.next( ( this.itemCnt.value ) + this.itemCnt.value + 1 );
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

  /*  _zip, unzip, pullAt, without, xor, compact _.includes */
  populateDefaultVariations() {
    console.log( '.populateDefaultVariations.....' );

    const objectMFG = this.objectMFG;
    const objectColor = this.objectColor;

    console.log( { objectMFG } );

    const MFGS = Object.entries( objectMFG );
    const COLORS = Object.entries( objectColor );

    // TODO review if needed this.mfgs = _.orderBy( MFGS );
    this.colors = this.sortList( COLORS );
  }

  /* HANDLE COLOR CHANGE */
  handleColorChange( selColor: any = { 'Acadia(750)': ['555291'] } ) {
    this.itemCnt.next( 0 );

    // console.log( { selColor } )
    // TODO default Sku is this important when no selection has been made?

    const objectMFG = this.objectMFG;
    const objectColor = this.objectColor;

    /* SORT MFG */
    this.mfgs = _.orderBy( Object.entries( objectMFG ) );

    /* SORT COLORS */
    this.colors = this.sortList( Object.entries( objectColor ) );
    /*  */
  }
  getMatches() {
    const getMatches: any = _.intersection( this.selectedMFG, this.skuDisplayColor );
    this.matches = getMatches;
    // console.log( { getMatches } ); // console.log( 'skuDisplayMFG', this.selectedMFG ); // console.log( 'skuDisplayColor', this.skuDisplayColor );
    return getMatches;
  }

  // get MFG matches to a selected Color
  getAllMatches( color: any = ['Acadia(750)', ['555291']] ) {
    // product 40775

    const objectColor = this.objectColor;
    const objectMFG = this.objectMFG;

    // loop over each mfg
    const entries = Object.entries( objectMFG )
      .map( ( itemMfg: any ) => {

        /* TODO */
        const itemColor: any = objectColor[color[0]];

        // console.group();
        if ( _.includes( itemMfg[1], itemColor[0] ) ) {
          // console.log( _.includes( itemMfg[1], itemColor[0] ) ? { ...itemMfg, active: true } : itemMfg )
        }
        // console.groupEnd();
        return _.includes( itemMfg[1], itemColor[0] ) ? { ...itemMfg, active: true } : itemMfg;
      } );
    console.log( { entries } );
    /* End of entries  */

    const matchesCompare = _.compact( entries );
    console.log( { matchesCompare } );

    /*  */
    this.mfgs = matchesCompare;
    this.allMatches = matchesCompare;
    // return ['no matches']
  }

  updateDropdownAfterSelection() {

  }

  getSelectedMFGMatches() {
    const matchesCompare: any[] = [];

    /*  */
    const rebuildMFGDropdown = this.mfgs.map( ( itemMfg: any ) => {
      return matchesCompare.map( itemCompare => {
        if ( itemCompare[0] === itemMfg[0] ) {
          /*  console.group( 'EQUAL' )
           console.log( 'xxx: compare', { itemCompare } )
           console.log( 'xxx: mfg', { itemMfg } );
           console.groupEnd(); */
          return itemMfg;
        }
      } )
      // return itemMfg
    } );
    console.log( { rebuildMFGDropdown } );
  }

  hasSku( sku: any, item: any ) {
    /* console.group( 'hasSku' )
    console.log( { sku } );
    console.log( { item } );
    console.log( 'eqs', _.includes( item, sku ) );
    console.groupEnd(); */

    const hasSku = _.includes( item, sku );

    // hasSku(sku, item[1]) && item[1].map(m => m === sku)
    const exactMatch = hasSku && item.map( ( m: any ) => {
      if ( !m === sku ) return;
      return sku
    } );
    // console.log( 'exactMatch:', _.uniq( exactMatch ) )
    return _.uniq( exactMatch );
  }

  displaySelectedSku() {
    return this.mfgSelection[1]?.length < 2 ? this.mfgSelection[1] : this.mfgSelection[1][0];
  }
  setSkuDisplayMFG( selection: any ) {
    // console.log( { selection } )
    this.selectedMFG = selection[1];
    this.mfgSelLabel = selection[0]
    this.mfgSelection = selection; // console.log( 'mfgSelection:', this.mfgSelection )
    this.mfgSelectionSkus = [];

    this.getMatches();
    this.getAllMatches();
    return this.getMatches();
  }

  setSkuDisplayColor( selection: any ) {
    // console.log( { selection } )
    this.skuDisplayColor = selection[1];
    this.colSelLabel = selection[0]
    this.colorSelection = selection;
    this.colorSelectionSkus = []

    this.getMatches();
    this.getAllMatches( selection );
    return this.getMatches();
  }

  highlightMatch( item: any ) {
    // console.log( 'xxxxxx:', _.includes( this.matches, item ) );
    return _.includes( this.matches, item );
  }

  disableDropdownItem( item: any ) {
    console.log( { item } )
    // item[0]
    return item;
  }

  toggleShowTiles() {
    this.showTiles.next( !this.showTiles.value )
  }


  /* MISC */
  /*   getFullUrl( sku: string ) {
      return "'https://static.becn.com/insecure/plain/images/large/' + imgSku + '_default_small.jpg'"
    } */

  /* DRAFT */
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


}
