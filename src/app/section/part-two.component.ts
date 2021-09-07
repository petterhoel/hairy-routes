import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-part-two',
  template: `
    <p>
      part-two works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
