import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-part-three',
  template: `
    <p>
      part-three works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
