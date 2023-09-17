import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VariationService } from 'src/app/services/variations/variation.service';

@Component( {
  selector: 'app-templates-detail-page',
  templateUrl: './templates-detail-page.component.html',
  styleUrls: ['./templates-detail-page.component.scss']
} )
export class TemplatesDetailPageComponent implements OnInit {
  details: any = {};
  account: any = {};

  constructor(
    private readonly variationService: VariationService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    console.log( { state } );
  }

  ngOnInit(): void {
    // set page via route params
    console.log( this.variationService.sampleTemplates );
    const templates = this.variationService.sampleTemplates;

    this.route.paramMap.subscribe( ( r: any ) => {
      console.log( { r } );
      // fetch template // r.params.itemNumber, .templateId
      const templateSelected = templates.find( ( f: any ) => f.templateId === r.params.templateId );
      console.log( { templateSelected } );
      // console.log( 'param:', r.params.itemNumber )
      const selection = templateSelected.templateItems.find( ( f: any ) => f.itemNumber === r.params.itemNumber );
      console.log( { selection } );
      //
      this.details = selection;
      console.log( 'details', this.details );
      //
      this.account = { accountName: templateSelected.accountName, accountId: templateSelected.accountLegacyId };
    } )
    //

  }

}
