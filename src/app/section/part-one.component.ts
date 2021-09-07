import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-part-one',
  template: `
    <p>
      part-one works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
