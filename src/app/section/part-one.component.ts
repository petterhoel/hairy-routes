import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UrlIdService} from "../url-id.service";

@Component({
  providers: [{ provide: UrlIdService, useClass: UrlIdService  }],
  template: `<p>1</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartOneComponent implements OnInit {

  constructor(private url: UrlIdService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => console.debug({pid: p.get('jaja')}))
  }
}
