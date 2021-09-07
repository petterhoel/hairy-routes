import {Directive} from '@angular/core';
import {UrlIdService} from "./url-id.service";
import {Router} from "@angular/router";

@Directive({
  selector: '[appNavigatore]'
})
export class NavigatoreDirective {
  constructor(
    private router: Router,
    private urlService: UrlIdService) {

  }
}
