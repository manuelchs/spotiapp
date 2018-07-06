import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'secureDom'
})
export class SecureDomPipe implements PipeTransform {
  constructor( private _domSanitizer: DomSanitizer ) {}

  transform(value: string, url: string): SafeResourceUrl {
    return this._domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }
}
