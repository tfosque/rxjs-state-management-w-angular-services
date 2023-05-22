import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive( {
  selector: '[appImgErr]'
} )
export class ImgErrDirective {

  @Input() fallbackImgSrc = '';

  constructor() { }

  @Input() src!: string;

  @HostBinding( 'src' )
  get originalSrc() {
    return this.src;
  }
  get originalFallbackImg() {
    return this.fallbackImgSrc;
  }

  @HostListener( 'error' ) onError() {
    this.src = 'https://beaconproplus.com' + this.originalFallbackImg;
  }


}
