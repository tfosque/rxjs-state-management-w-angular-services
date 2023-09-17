import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-variation-item',
  templateUrl: './variation-item.component.html',
  styleUrls: ['./variation-item.component.scss']
} )
export class VariationItemComponent implements OnInit {
  @Input() variationType = '';
  @Input() element: any = {}


  constructor() { }

  ngOnInit(): void { }
  getItemVariations( element: any, varType: string ) {
    // console.log( { element, varType } );
    const list = element[varType];
    const KEYS = Object.keys( list );
    // 
    return KEYS.sort();
  }
  doSomething() { }

}
