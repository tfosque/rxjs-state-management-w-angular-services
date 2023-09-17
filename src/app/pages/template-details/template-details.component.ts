import { Component, OnInit } from '@angular/core';
// import { Large_Template_9_15_23 as templateData } from './currentSkuData';
import { Templates } from './templates-data';
import { VariationService } from 'src/app/services/variations/variation.service';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';

@Component( {
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.scss']
} )
export class TemplateDetailsComponent implements OnInit {
  sampleTemplates: any = [];
  sampleDataSrc: any = [];
  templateSkus: any = [];
  targetTemplateId = '';
  accountName = '';
  accountId = '';

  constructor(
    private readonly variationService: VariationService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    console.log( 'template details page...' );
  }

  ngOnInit(): void {
    this.initializeTemplates();
    this.initializeDropdownSkus();
    console.log( 'this', this )
    console.log( 'sampleTemplates', this.sampleTemplates );
    console.log( 'sampleDataSrc', this.sampleDataSrc[0].templateItems );
    // console.log('sampleDataSrc', this.sampleDataSrc)
  }

  initializeTemplates() {
    this.sampleTemplates = Templates;
    this.variationService.sampleTemplates = Templates; // targeted    
  }

  initializeDropdownSkus() {
    this.sampleDataSrc = this.sampleTemplates[0].templateItems;
    this.templateSkus = this.sampleDataSrc;
    this.targetTemplateId = this.sampleTemplates[0].templateId;
    this.accountName = this.sampleTemplates[0].accountName;
    this.accountId = this.sampleTemplates[0].accountLegacyId;
    //
    this.variationService.setAccount( this.accountName, this.accountId )
  }
  handleTemplateSelect( val: any ) {
    console.log( { val } );
    // find template  
    const newTemplate = this.sampleTemplates.find( ( template: any ) => template.templateId === val );
    this.targetTemplateId = newTemplate.templateId;
    this.templateSkus = newTemplate.templateItems;
  }

  handleTemplateClick( element: any ) {
    console.group( 'handleTemplateClick' );
    console.log( 'targetTempId', this.targetTemplateId )
    console.log( { element } );
    console.groupEnd();
    // set element
    this.variationService.setVariationDetails( element );
    this.router.navigate( ['/account/templates-detail-page', element.itemNumber, this.targetTemplateId],
      { state: { itemNumber: element.itemNumber, templateId: this.targetTemplateId } } );
  }
}
