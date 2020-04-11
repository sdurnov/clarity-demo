import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-accordion-default',
  templateUrl: './accordion-default.component.html',
  styleUrls: ['./accordion-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionDefaultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
