import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements OnInit {

  name: string;

  options = {
    1: '',
    2: '',
    3: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  preventClickBubbling(event:Event) {
    event.stopPropagation();
  }

}
