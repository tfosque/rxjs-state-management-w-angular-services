import { Component, Input, OnInit } from '@angular/core';
import { VariationService } from 'src/app/services/variations/variation.service';

@Component( {
  selector: 'app-variation-item',
  templateUrl: './variation-item.component.html',
  styleUrls: ['./variation-item.component.scss']
} )
export class VariationItemComponent implements OnInit {
  @Input() variationType = '';
  @Input() element: any = {};
  dropdownItems: any = [];
  defaultSkuId = '';


  constructor(
    private readonly variationService: VariationService
  ) { }

  ngOnInit(): void {
    console.log( 'variationType:', this.variationType );
    console.log( 'default:', this.element.currentVariations );
    this.defaultSkuId = this.element.defaultSkuId;
    //
    const dropdown = this.variationService.buildDropDownsQuick2( this.element, this.variationType );
    console.log( { dropdown } );
    //
    this.dropdownItems = dropdown;
  }
  /*  getItemVariations( element: any, varType: string ) {
     // console.log( { element, varType } );
     const list = element[varType];
     const KEYS = Object.keys( list );
     // 
     return KEYS.sort();
   } */
  doSomething() { }

}
