import { Component, OnInit, Input } from '@angular/core';

@Component( {
  selector: 'app-variation-group',
  templateUrl: './variation-group.component.html',
  styleUrls: ['./variation-group.component.scss']
} )
export class VariationGroupComponent implements OnInit {
  @Input() element: any = {};

  constructor() {
  }

  ngOnInit(): void {
    if ( this.element.itemNumber === '735304' ) {
      console.log( 'intpu.', this.element );
    }
  }

  getItemVariations( element: any, varType: string ) {
    console.log( { element, varType } );
    const list = element[varType];
    const KEYS = Object.keys( list );
    // 
    return KEYS.sort();
  }
  buildDropDownsQuick2( element: any, varType: string ): any {
    return [{ color: '', sku: '' }]
  }
  handleDropdown( val: any ) {
    // const indx = this.sampleDataSrc1.templateItems.findIndex( ( f: any ) => f.itemNumber === val );
    //  this.targetItemNumber = indx;
  }

  doSomething( evt: any, element: any, varType: string ) {

  }

}
