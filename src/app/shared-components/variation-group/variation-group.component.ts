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

  ngOnInit(): void { }
}
