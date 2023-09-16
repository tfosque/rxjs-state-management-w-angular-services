import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-variation-item',
  templateUrl: './variation-item.component.html',
  styleUrls: ['./variation-item.component.scss']
} )
export class VariationItemComponent implements OnInit {
  @Input() variationItem: any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
