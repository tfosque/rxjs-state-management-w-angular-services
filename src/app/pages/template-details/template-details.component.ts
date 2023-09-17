import { Component, OnInit } from '@angular/core';
import { Large_Template_9_15_23 as templateData } from './currentSkuData';
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
  }

  initializeTemplates() {
    this.sampleTemplates = Templates;
    this.variationService.sampleTemplates = Templates; // targeted
    console.log( this.sampleTemplates )
  }

  initializeDropdownSkus() {
    this.sampleDataSrc = templateData;
    this.templateSkus = this.sampleDataSrc.templateItems;
    this.targetTemplateId = this.sampleTemplates[0].templateId;
    this.accountName = this.sampleTemplates[0].accountName;
  }
  handleTemplateSelect( val: any ) {
    console.log( { val } );
    // find template  
    const newTemplate = this.sampleTemplates.find( ( template: any ) => template.templateId === val );
    this.targetTemplateId = newTemplate.templateId;
    this.templateSkus = newTemplate.templateItems;
  }

  handleTemplateClick( element: any ) {
    console.log( { element } );
    // set element
    this.variationService.setVariationDetails( element );
    this.router.navigate( ['/account/templates-detail-page', element.itemNumber, this.targetTemplateId],
      { state: { itemNumber: element.itemNumber, templateId: this.targetTemplateId } } );
  }
}
