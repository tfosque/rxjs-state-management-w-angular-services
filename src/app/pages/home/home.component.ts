import { Component, OnInit } from '@angular/core';
import { VariationColors, VariationMfg } from '../../services/variations';
// import { FormControl } from '@angular/forms';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { currSkuData_407754, Large_Template as templateData } from './currentSkuData';
import { AddProductModalPilotComponent } from 'src/app/shared-components/add-product-modal-pilot/add-product-modal-pilot.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/products.service';
/* TODO */
// How do we get default or current sku selections
// 

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
} )
export class HomeComponent implements OnInit {
  targetItemNumber = 0;

  folders: any[] = [
    {
      name: 'Photos',
      updated: new Date( '1/1/16' ),
    },
    {
      name: 'Recipes',
      updated: new Date( '1/17/16' ),
    },
    {
      name: 'Work',
      updated: new Date( '1/28/16' ),
    }
  ];
  notes: any[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date( '2/20/16' ),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date( '1/18/16' ),
    }
  ];
  sampleDataSrc = [
    { select: 1, product: 'Tri-Build 3` Aluminum Hercules Retro Drain', price: 1.0079, qty: 1, del: '' },
    { select: 1, product: 'Tri-Build 3` Aluminum Hercules Retro Drain', price: 1.79, qty: 2, del: '' },
    { select: 1, product: 'Tri-Build 3` Aluminum Hercules Retro Drain', price: 12.0079, qty: 1, del: '' },
    { select: 1, product: 'Tri-Build 3` Aluminum Hercules Retro Drain', price: 231, qty: 3, del: '' },
    { select: 1, product: 'Tri-Build 3` Aluminum Hercules Retro Drain', price: 123.5, qty: 1, del: '' },
  ]
  /*  */
  itemDetails_438733 = this.productsService.ItemDetailsResponse_p438733;
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
  constructor(
    public dialogComp: MatDialog,
    private readonly productsService: ProductsService
  ) {
    console.log( 'sampleDataSrc1:Array', this.sampleDataSrc1.templateItems );
    // console.log( 'ItemDetails:438733', this.productsService.ItemDetailsResponse_p438733 );
  }

  ngOnInit(): void {
    // this.initializeDropdowns();
    console.group( 'sampleProduct' );
    const sampleProduct = this.sampleDataSrc1.templateItems[1];
    console.log( { sampleProduct } )
    console.groupEnd();

    /* CUURENT SKU DATA */
    // currSku variations has shorter list of mfgs and colors but name only
    // find these matches in larger list of mfgs and colors

    // setup variables
    const currSkuVariations = this.currentSkuData.variations;
    const currSkuMFG = currSkuVariations['MFG'];
    const currSkuCOLOR = currSkuVariations['color'];
    const baseVariations = { MFG: this.objectMFG, COLOR: this.objectColor };

    /* sort */
    const sortCurrSkuMFG_simple_array = this.sortList( currSkuMFG );
    const sortCurrSkuCOLOR_simple_array = this.sortList( currSkuCOLOR );
    const baseVariationsMFG_Array = this.sortList( Object.entries( baseVariations.MFG ) );
    const baseVariationsCOLOR_Array = this.sortList( Object.entries( baseVariations.COLOR ) );

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
     console.log( { sortCurrSkuMFG_simple_array } );
     console.log( { sortCurrSkuCOLOR_simple_array } );
     console.log( { baseVariationsMFG_Array } );
     console.log( { baseVariationsCOLOR_Array } );
     console.groupEnd(); */
    /*  */

    // first return the matching skus from base MFG(808) and currSkuMFG(39)
    const tagAsMatch = sortCurrSkuMFG_simple_array
      .map( ( currSku: any, index: number ) => {
        // console.log( 'baseVariations[MFG][entries]:', baseVariations['MFG'].hasOwnProperty( currSku ) ? baseVariations['MFG'][currSku] : null )
        return baseVariations['MFG'].hasOwnProperty( currSku )
          ? { name: currSku, skus: baseVariations['MFG'][currSku], active: true }
          : null
      } );
    // console.log( { tagAsMatch } );
    /* END CURR SKU DATA */
  }

  handleDropdown( val: any ) {
    const indx = this.sampleDataSrc1.templateItems.findIndex( ( f: any ) => f.itemNumber === val );
    this.targetItemNumber = indx;
    // console.log( { indx } );
  }

  /* Custom Methods */

  sizeInput( varType: string ): string {
    /* returning width
      variationType === 'packaging' ? '158px' : variationType === 'color' ? '240px' : 
      variationType === 'MFG' ? '240px' : variationType === 'diameter' ? '130px' : 
      variationType === 'size' ? '110px' : '90px'	
    */
    let styl = '';
    if ( varType === 'packaging' ) {
      styl = '158px'
    } else if ( varType === 'color' ) {
      styl = '198px'
    } else if ( varType === 'MFG' ) {
      styl = '240px'
    } else if ( varType === 'diameter' ) {
      styl = '130px'
    }
    return styl;
  }
  initializeDropdowns() {
    this.populateDefaultVariations();

    const defaultSelections = ( { mfg: this.selectedSkuMfg, colors: this.selectedSkuColor } );

    this.setSkuDisplayColor( defaultSelections.colors );
    this.handleColorChange( defaultSelections.colors );

    /* Display results  */
    this.setSkuDisplayMFG( defaultSelections.mfg );
  }
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

  /* HANDLE COLOR CHANGE */
  handleColorChange( selColor: any = { 'Acadia(750)': ['555291'] } ) {
    console.log( { selColor } )

    // TODO default Sku is this important when no selection has been made?
    const objectMFG = this.objectMFG;
    const objectColor = this.objectColor;

    /* SORT MFG */
    this.mfgs = _.orderBy( Object.entries( objectMFG ) );

    /* SORT COLORS */
    this.colors = this.sortList( Object.entries( objectColor ) );
    /*  */
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

  removeChip() {
    return;
  }

  getMatches() {
    const getMatches: any = _.intersection( this.selectedMFG, this.skuDisplayColor );
    this.matches = getMatches;
    // console.log( { getMatches } ); // console.log( 'skuDisplayMFG', this.selectedMFG ); // console.log( 'skuDisplayColor', this.skuDisplayColor );
    return getMatches;
  }

  /*   getItemVariations( item: any, v: any ) {
      console.log( { item }, { v } )
      return item[v]
    } */

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

  /* addToSelectedItems( el: any, item: any, checked: any ): void {
    const currentSelItems = this.selectedItems.value;

    if ( !checked ) {
        // remove item
        const filterList = currentSelItems.filter( f => {
            return f.itemNumber !== item.itemNumber
        } );
        this.selectedItems.next( filterList );
        console.log( 'this:sel:', this.selectedItems.value )
        return;
    }

    this.selectedItems.next( [...currentSelItems, ...item] );
} */

  /* onVariationChange( sku: any ) {
      // skus = []
      const skus = this.templateItemVariations.value.map( ( m: any ) => {
          return m;
      } )
      console.log( { skus } );
  
      // filteredSku = {}
      skus.filter( ( f: any ) => {
          console.log( 'filter:', f === sku )
      } )
      // this.newImage = filteredSku
  } */
  handleLoadErrors() { }

  doSomething( evt: any, element: any, vtype: any ) {
    console.group();
    console.log( evt );
    console.log( element );
    console.log( vtype );
    console.groupEnd();
    return;
  }

  /*   onDropListItem( event: CdkDragDrop<any> ) {
      console.log( { event } );
      moveItemInArray( this.templatePageLineItems.value, event.previousIndex, event.currentIndex )
  }
   */
  /* getTemplateItemTotals() {
      const arr = this.templatePageLineItems.value;
      const sum = arr.reduce( ( accumulator, object: any ) => {
          return accumulator + ( object.unitPrice * object.quantity );
      }, 0 );
      // console.log( { sum } );
      return sum;
  } */
  getItemVariations( data: any, varType: any ) {
    // console.log( 'getItemVariations', { data }, { varType } );
    const list = data[varType];
    const KEYS = Object.keys( list );
    // 
    // this.buildDropDownsQuick( data, varType )
    return KEYS.sort();
  }
  buildDropDownsQuick( data: any, varType: any ): any {
    // console.log( 'buildDropDownsQuick', { data }, { varType } );
    const list = data[varType];
    const KEYS = Object.keys( list );

    const dataArray = Object.entries( data ).map( ( k: any ) => {
      return Object.entries( k[1] ).map( ( i: any ) => {
        // console.log( { i } )
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

  /* GENERAL */
  openDialog() {
    const dialogRef = this.dialogComp.open( AddProductModalPilotComponent );

    dialogRef.afterClosed().subscribe( result => {
      console.log( `Dialog result: ${result}` );
    } );
  }

  onDisplaySelProduct( selection: any ) {
    //
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
