import { Component, OnInit } from '@angular/core';
import { Large_Template_9_15_23 as templateData } from './currentSkuData';

@Component( {
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.scss']
} )
export class TemplateDetailsComponent implements OnInit {
  sampleDataSrc: any = [];
  templateSkus: any = [];
  targetSku = '';

  constructor() {
    console.log( 'template details page...' )
  }

  ngOnInit(): void {
    this.initializeDropdownSkus();
  }

  initializeDropdownSkus() {
    this.sampleDataSrc = templateData;
    this.templateSkus = this.sampleDataSrc.templateItems;
    this.targetSku = this.templateSkus[0].itemNumber;
  }
  handleDropdown( val: any ) {
  }
}
